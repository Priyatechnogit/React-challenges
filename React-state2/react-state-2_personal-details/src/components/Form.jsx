import { useState } from "react";

export default function Form({ onCreateUser }) {
 const [name, setName] = useState("");
const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    /* setName(event.target.name.value);
    setEmail(event.target.email.value);
    console.log("setName",setName)
    console.log("setEmail",setEmail)
     */
    onCreateUser(name,email);
    setName("");
    setEmail("");
    


  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name"
       name="name" 
       type="text" 
       placeholder="John Doe"
       value = {name} 
       onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="email">Email: </label>
      <input id="email"
       name="email"
        type="email"
         placeholder="john@doe.com" 
         value = {email} 
       onChange={(e) => setEmail(e.target.value)}/>
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
