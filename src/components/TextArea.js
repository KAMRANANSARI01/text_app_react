import React,{useState} from 'react'
 import Alert from './Alert'
export default function TextArea(props) {
   const [text, setText] = useState('')
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
        showAlert(' Converted to UpperCase','Success: ')

     }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        showAlert('Converted to LowerCase ','Success: ')

     }
    const handleClearClick = ()=>{
        let newtext = ""
        setText(newtext)
        showAlert('Text cleared. ','Success: ')
     }
     const handleCopy = () =>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        showAlert('Copied to clipboard','Success: ')
     } 

  
        const handleOnChange = (event)=>{
        // console.log("onchanged")
        setText(event.target.value)
     }
       
  // usestate for alert

  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    <Alert alert={alert} />
    <div className='container'style={{color:props.mode==="dark"?'white':'black'}}>
      <h1>{props.heading}</h1>
     <div className="mb-3"> 
     <textarea className="form-control" style= {{backgroundColor:props.mode==="dark"?'#465366':'white',color:props.mode==="dark"?'white':'black'}} id="myBox" onChange={handleOnChange} rows="8" value={text}> </textarea>
     </div>
     <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
     <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?'white':'black'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0;}).length} words and {text.length} charaters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0;}).length} Minutes take to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it.'}</p>
    </div>
    
    </>
  )
}
