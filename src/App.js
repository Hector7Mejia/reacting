import AddUser from "./components/Users/AddUser";
import AddUsersList from "./components/Users/AddUsersList";
import {useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName,uAge) => {
        setUsersList((prevUserList => {
            return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString()}]
        }));

    }

    return (<div>
            <AddUser onAddUser={addUserHandler}/>
            <AddUsersList users={usersList}/>
        </div>
    );
}

export default App;
