export default function App() {
  return (
    <div>
      <Greeting name="Phil" />
      <Greeting name="Alex" />
    </div>
  );
}

function Greeting({name}){
  return (
    <div>
    <h1>Hello {name}! </h1>
    <h1>
      {name === "Alex" ? "Hello, Coach!" : `Hello, ${name}!`}
    </h1>
    </div>
  );

}

