export default function App() {
  return <Sum valueA={5}  valueB={6}/>;
}


function Sum({valueA,valueB}){
  const result = valueA + valueB;
  return(
  <h1>
    {valueA} + {valueB} = {result}
  </h1>
);
}