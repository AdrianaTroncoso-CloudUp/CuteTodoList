import React,{useState, useEffect, useRef} from 'react'
import ReactDOM from "react-dom";

function LittleForm() {
    const [query, setQuery] = useState('');
  
    const inputRef = React.createRef()
  
    const updateQuery = () => {
      const inputText = inputRef.current.value
      setQuery(inputText)
    }
  
    useEffect(() => {
      console.log(`you have updated your query to ${query}`) 
    }, [query])
  
    return (
      <div className="App">
        <input ref={inputRef}/>
        <button onClick={updateQuery}>Click</button>
        <h4>Input Text: {query}</h4>
      </div>
    );
  
}

export default LittleForm