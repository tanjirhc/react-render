function List(){

  const fruits =[{id: 1, name:"apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 37}, 
                  {id: 4, name: "coconut", calories: 150}, 
                  {id: 5, name: "pineapple", calories: 55}];

  fruits.sort();
  
  const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          {fruit.calories}</li>);

  return(<ol>{listItems}</ol>);
}
export default List;