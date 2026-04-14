import Card from "./components/Card";

export default function App() {
  const fruits = [
    {id:0,name:"Banana🍌",color:"yellow"},
    {id:1,name:"Apple🍎",color:"red"},
    {id:2,name:"grapes🍇",color:"purple"},
    {id:3,name:"orange🍊",color:"orange"},
    {id:4,name:"pears🍐",color:"green"}
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
            //<Card name="🍌 banana" />
            <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
