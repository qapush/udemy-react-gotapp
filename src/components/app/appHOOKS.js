import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, refreshData] = useState([{ name: "Ivan", sex: "male" }]);




 useEffect(() => {
  if(data){
    console.log(data);
  }
  
})

  return (
    <>
      <div>
        <p>You've clicked {count} times</p>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
      </div>

      {data.map(item => {
        return(
          <div>
            Name: {item.name}, sex: {item.sex}
          </div>
        );
      })}

      <button onClick={()=>{
        refreshData(data => (
          [...data, {name: 'Natasha', sex: 'female'}]
        ))
      }}>
          Add data
      </button>
    </>
  );
}

export default App;
