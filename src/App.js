import React from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState([]);

  function getUserInput(uName, uAge) {
    setUserInput((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }
  console.log(userInput);

  return (
    <div>
      <AddUser dataSender={getUserInput} />
      {userInput.length === 0 ? <p></p> : <UsersList users={userInput} />}
    </div>
  );
}

export default App;
