import { useState } from 'react'




import React from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    var newtext=text.toUpperCase();
    // console.log("UpperCase Buttn Clicked "+text);
    setText(newtext);
    props.showAlert("converted to Upper Case","success");
  }
  const handleLowClick=()=>{
    var newtext=text.toLowerCase();
    // console.log("UpperCase Buttn Clicked "+text);
    setText(newtext);
    props.showAlert("converted to Lower Case","success");
  }

  const handleClearClick=()=>{
    var newtext="";
    // console.log("UpperCase Buttn Clicked "+text);
    setText(newtext);
    props.showAlert("Text Cleared","success");
  }

  const handleCapitalClick=()=>{
    let newtext;
    
    newtext=text.toLowerCase().split(" ").map(word=> word.charAt(0).toUpperCase()+ word.slice(1)).join(" ");
    // console.log("UpperCase Buttn Clicked "+text);
    setText(newtext);
    props.showAlert("converted to Capitalized Case","success");
  }
  
  const handleOnChange=(e)=>{
    setText(e.target.value);
    // console.log("UpperCase Buttn Clicked");
  }

   const handleCopy=()=>{
    // console.log("I am Copy Button");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
   }

   const handleextrasapce=()=>{
    var newtxt=text.split(/[ ]+/); //Used regex 
    setText(newtxt.join(" "));
    props.showAlert("Removed Extra Spaces","success");
   }
  const [text,setText] = useState('');
  // text="Settext new" CANT USE THIS VARIABLE TO UPDATE VALUE OF TEXT WE NEET T USE THE FUNCTION SETTEXT ONLY
  // setText("Hamza Shaikh");// Correct Way
  return (
   <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black' }}>
        <h1> {props.heading}  </h1>
        <div className="mb-3"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#13466e' : 'white', color:props.mode==='dark'? 'white': '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick} > Capitalized Case </button> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} > Convert To UpperCase </button>      
        <button className="btn btn-primary mx-1 my-1" onClick={handleextrasapce} > Remove Extra Spaces</button>     
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} > Convert To LowerCase </button> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} > Clear Text </button>      
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} > Copy Text</button>     
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black' }}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((e)=>{
              return e.length!==0;
      }).length} words and {text.length} Charachters</p>
      <p>{0.008 * text.split(" ").filter((e)=>{
              return e.length!==0;
      }).length} Average Minutes to Read Whole Paragraph</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
   </>
  )
}
