import './LoginCard.css';
import {useState} from "react";
import LoginList from "./LoginList";


const LoginCard = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            username: enteredUsername,
            age: enteredAge
        };

    }

    return(
        <form onSubmit={submitHandler}>
            <div>Username</div>
            <input/>
            <div>Age(Years)</div>
            <input/>
            <button>Add user</button>
            <LoginList/>
        </form>
)}

export default LoginCard;