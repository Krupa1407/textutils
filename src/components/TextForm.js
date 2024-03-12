import React, {useState} from 'react'


export default function TextForm(props) {
  //note : in the below line the default value of the text (state variable) is enter the text here and to update that value we did setText("sdfsf");
  // text is a variable value and setText is the function used to update the value of text.
  // const [text , setText] = useState('enter the text here.');
  const [text , setText] = useState('');
  
  const handlleUpClick = () => {
    // console.log("uppercase clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    // setText("clicked on the handleonclick.");
    props.showalert("converted to uppercase." , "success");
  }
  const handlleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showalert("converted to lowercase." , "success");
  }
  const handlleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showalert("text cleared." , "success");
  }
  const handleOnChange = (event) => {
    // console.log("handleonchange clicked.");
    setText(event.target.value);
  }
  const handlleCopyClick = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("text copied." , "success");
  }
  const handlleRmvExtraSpcClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("extra space has been removed." , "success");
  }

  return (
    <>
    <div className='container' style={{color:props.mode === "light"?"black":"white"}}> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode === "light"?"white":"#03275d" , color:props.mode === "light"?"black":"white"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlleUpClick}>convert to uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlleClearClick}>clear text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlleCopyClick}>copy text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlleRmvExtraSpcClick}>remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === "light"?"black":"white"}}>
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes take to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>
  )
}
