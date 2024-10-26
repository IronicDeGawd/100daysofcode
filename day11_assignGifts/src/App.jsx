import { useRef, useState } from "react";
import Person from "./components/Person";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [assigned, setAssigned] = useState(false);

  const inputRef = useRef(null);
  const input2Ref = useRef(null);

  // const gifts = [
  //   "Firecracker",
  //   "Sweets",
  //   "Bicycle",
  //   "Lamp",
  //   "Stationary",
  //   "Utensils",
  //   "Gold Coins",
  //   "Coffee Machine",
  // ];

  const handleOnAddPerson = () => {
    let name = inputRef.current.value;
    if (name.length > 0) {
      setPerson((person) => [{ name: name, gift: "Not Assigned" }, ...person]);
      console.log("Person added", name);
      inputRef.current.value = "";
    } else alert("Enter Name first!!");
  };

  const handleOnAddGift = () => {
    let giftName = input2Ref.current.value;
    if (giftName.length > 0) {
      setGifts((gift) => [...gift, giftName]);
      console.log("Gift added", giftName);
      input2Ref.current.value = "";
    } else alert("Enter Gift first!!");
  };

  const handleOnRemoveGift = () => {
    if (gifts.length > 0) {
      // console.log(gifts);
      const giftToRemove = gifts.pop();
      setGifts(gifts.filter((gift) => gift != giftToRemove));
    } else alert("No gifts to remove!!");
  };

  const handleOnAssignGift = () => {
    if (!assigned && gifts.length > 0) {
      const updatedPerson = person.map((person) => {
        let randomValue = Math.floor(Math.random() * gifts.length);
        // console.log(gifts[randomValue]);
        return { ...person, gift: gifts[randomValue] };
      });
      setPerson(updatedPerson);
      setAssigned(true);
    } else
      alert(
        "Ensure you have added giftAssign can only be used once. Reset to reuse!!"
      );
  };

  const handleDelete = (event) => {
    let index = parseInt(event.target.id);
    setPerson((prevPersons) => prevPersons.filter((_, i) => i !== index));
  };

  const handleOnReset = () => {
    const updatedPerson = person.map((person) => {
      return { ...person, gift: "Not Assigned" };
    });
    setPerson(updatedPerson);
    setAssigned(false);
  };

  const handleOnResetGift = () => {
    if (gifts.length > 0) {
      setGifts([]);
    } else alert("Add gifts first!!");
  };

  const handleOnShuffle = () => {
    if (assigned) {
      const updatedPerson = person.map((person) => {
        let randomValue = Math.floor(Math.random() * gifts.length);
        return { ...person, gift: gifts[randomValue] };
      });
      setPerson(updatedPerson);
    } else alert("Assign gifts first!!");
  };

  return (
    <>
      <h1>Gift Assign</h1>
      <p>
        <b>Gift Pool: </b>
        {gifts.map((gift) => (
          <span key={gift}>{gift}, </span>
        ))}
      </p>
      <input
        onKeyUp={(e) => {
          if (e.key == "Enter") {
            handleOnAddGift();
          }
        }}
        ref={input2Ref}
        placeholder="Enter Gifts"
      ></input>
      <button onClick={handleOnAddGift}>Add Gift</button>
      <button onClick={handleOnRemoveGift}>Remove Gift</button>
      <br></br>
      <input
        ref={inputRef}
        placeholder="Enter Person Name"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleOnAddPerson();
          }
        }}
      ></input>

      <button onClick={handleOnAddPerson}>Add Person</button>
      <table>
        {person.map((profile, index) => (
          <Person
            key={index}
            id={index}
            name={profile.name}
            gift={profile.gift}
            handleDelete={handleDelete}
          />
        ))}
      </table>
      <button onClick={handleOnAssignGift}>Assign Gifts</button>
      <button onClick={handleOnShuffle}>Shuffle Gifts</button>
      <button onClick={handleOnResetGift}>Reset Gifts</button>
      <button onClick={handleOnReset}>Reset Assigned Gifts</button>
    </>
  );
}

export default App;

//input field to input name of person, initially gift is undefined
//when assign gifts is pressed random gifts are assigned to person
//once assigned, if assign pressed again, alert to say already assigned
//shuffle button to shuffle the gifts assigned
//reset button to reset all the gifts
