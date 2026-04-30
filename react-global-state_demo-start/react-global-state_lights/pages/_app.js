import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";


const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

   function handleToggle(id) {
    setLights(lights.map((l) => (l.id === id ? { ...l, isOn: !l.isOn } : l)));
  }

  function handleAllOn() {
    setLights(lights.map((l) => ({ ...l, isOn: true })));
  }

  function handleAllOff() {
    setLights(lights.map((l) => ({ ...l, isOn: false })));
  }

  //Dimm function from layout
  const isDimmed = lights.every((l) => !l.isOn);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component {...pageProps} 
      lights={lights}
        onToggle={handleToggle}
        onAllOn={handleAllOn}
        onAllOff={handleAllOff}/>
    </Layout>
  );
}
