import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";


 //global state
  const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];


export default function App({ Component, pageProps }) {
const [animals, setAnimals] = useState(initialAnimals);

function handleUpdateCount(id, delta) {
    setAnimals(animals.map((animal) =>
      animal.id === id 
        ? { ...animal, count: Math.max(0, animal.count + delta) } 
        : animal
    ));
  }
   // If the ID matches, create a NEW object with the updated count
      // Otherwise, return the animal exactly as it was
  return (
    <>
      <GlobalStyle />
      <Layout animals={animals}>
         {/* We pass the state and the updater function as props to every page */}
        <Component {...pageProps}
        animals={animals} 
          onUpdateCount={handleUpdateCount}  />
      </Layout>
    </>
  );
}
