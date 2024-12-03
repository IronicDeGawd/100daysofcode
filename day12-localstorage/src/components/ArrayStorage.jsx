import { useRef, useState } from "react";

function ArrayStorage() {
  const input = useRef(null);
  const [items, setItems] = useState([]);

  const handleOnAdd = () => {
    let item = input.current.value;
    setItems((items) => [...items, item]);
    input.current.value = "";
  };

  const handleObjectStore = () => {
    localStorage.setItem("array", JSON.stringify(items));
    setItems([]);
  };

  const handleObjectGet = () => {
    let getitems = JSON.parse(localStorage.getItem("array"));
    console.log(getitems);
    setItems(getitems);
  };

  const handleObjectDelete = () => {
    localStorage.removeItem("array");
    setItems([]);
  };

  return (
    <>
      <input
        onKeyUp={(e) => {
          if (e.key == "Enter") handleOnAdd();
        }}
        ref={input}
        placeholder="Enter Items to store"
      ></input>
      <button onClick={handleOnAdd}>Add Item</button>
      <br></br>
      {items.map((item, index) => (
        <span style={{ padding: "10px" }} key={index}>
          {item}
        </span>
      ))}
      <button onClick={handleObjectStore}>Store object</button>
      <button onClick={handleObjectGet}>Get object</button>
      <button onClick={handleObjectDelete}>Delete object</button>
    </>
  );
}

export default ArrayStorage;
