import { useState } from "react";

export default function useName() {

  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");

  const name = `${firstName} ${lastName}`.trim();

  //return [null, null, null];
  return [name, setFirstName, setLastName]
}
