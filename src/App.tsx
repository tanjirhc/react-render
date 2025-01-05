import List from "./List.tsx";

function App() {
  const fruits = [
                  { id: 1, name: "apple", calories: 95 },
                  { id: 2, name: "orange", calories: 45 },
                  { id: 3, name: "banana", calories: 37 },
                  { id: 4, name: "coconut", calories: 150 },
                  { id: 5, name: "pineapple", calories: 55 },
                 ];

  return <List items={fruits} category="Fruits"/>;
}

export default App;
