function List(){

  const fruits =[{name:"apple", calories: 95}, 
                  {name: "orange", calories: 45}, 
                  {name: "banana", calories: 37}, 
                  {name: "coconut", calories: 150}, 
                  {name: "pineapple", calories: 55}];

  fruits.sort();
  
  const listItems = fruits.map(fruit => <li>{fruit.name}</li>);

  return(<ol>{listItems}</ol>);
}
export default List;