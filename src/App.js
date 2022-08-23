import AddUser from "./components/Users/AddUser";
import AddUsersList from "./components/Users/AddUsersList";
import {Fragment, useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (uName,uAge) => {
        setUsersList((prevUserList => {
            return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString()}]
        }));

    }

    return (<Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <AddUsersList users={usersList}/>
        </Fragment>
    );
}

export default App;
