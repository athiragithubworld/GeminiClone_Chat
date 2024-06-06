import { createContext, useState } from "react";
import run from "../../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (words, delay) => {
    let formattedText = "";
    words.forEach((word, index) => {
      setTimeout(() => {
        formattedText += word;
        setResultData(formattedText);
      }, delay * index);
    });
  };

const newChat = () => {
  setLoading(false);
  setShowResult(false)
};

  async function onSent(prompt) {
    setResultData([]);
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response  = await run(prompt)
      setRecentPrompt(prompt)
    }
    else {
      setPrevPrompt((prev) => [...prev, input]);
      response = await run(input);
      setRecentPrompt(input);
    }
    // setRecentPrompt(input);
    //
    try {
      // const response = await run(input);
      let responseArray = response.split("**");
      let newResponse = ""; // Initialize newResponse with an empty string
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse +=
            "<span class='font-bold'>" + responseArray[i] + "</span>";
            
        }
      }

      let newResponse2 = newResponse.split("*"); // Split into lines
      // let wordIndex = 0;
      // newResponse2.forEach((line) => {
      //   let newResponseArray = line.split(" "); // Split line into words
      //   newResponseArray.forEach((word, i) => {
      //     delayPara(wordIndex, word + " "); // Add space after each word
      //     wordIndex++;
      //   });
      //   wordIndex++; // Extra increment for a newline
      // });
       let words = [];
       newResponse2.forEach((line) => {
         let newResponseArray = line.split(" ");
         newResponseArray.forEach((word) => {
           words.push(word + " "); // Add space after each word
         });
        //  words.push("\n"); // Add newline character for line break
       });

       delayPara(words, 75);

    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
      setInput("");
    }
  }

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    onSent,
    showResult,
    loading,
    resultData,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
