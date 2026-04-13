export default function App() {
 function handleClick(text){
  alert(`You clicked ${text} Button!`)
 }
  return(
     <div>
    <Button color="orange" disabled={true} text="Click Me" onClick={handleClick}/>
    <Button color="white" disabled={false} text="Save"  onClick={handleClick} />
    <Button color="gray" disabled={true} text="Disabled"  onClick={handleClick} />
    <Button color="yellow" disabled={false} text="Warning"  onClick={handleClick} />
  </div> 
  );
 
}


function Button({color,disabled,text,onClick}){
  return (
     <button
    style={{ color: color, backgroundColor: "blue" }}
      disabled={disabled}
      onClick={() => onClick(text)}>
       {text}
  </button>
 
  );
 
}