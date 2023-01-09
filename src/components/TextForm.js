import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUppercase = ()=>{
        console.log("Uppercase clicked.");
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("Change recorded");
        setText(event.target.value);
    }

    const[text, setText] = useState('Enter text here');

  return (
    <>
    <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.darkMode?'black':'white', color: props.darkMode?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.darkMode ? 'dark' : 'secondary'}`} onClick={handleUppercase}>Convert to Uppercase</button>
    </div>
    
    <div className="container my-3">
        <h1>Word summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <p>{text.length > 0 ? 'It\'s about a ' + text.split(" ").length/238 + ' minute read!' : null}</p>
    </div>

    <div className="container my-3">
        <h2>{text.length === 0 ? 'Enter text to preview here' : 'Preview'}</h2>
        <h4>{text.length > 0 ? text : null}</h4>
    </div>

    </>
  )
}
