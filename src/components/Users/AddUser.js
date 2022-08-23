import Card from "../UI/Card";
import {useState} from "react";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import {useRef} from "react";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = nameInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter a valid age'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'invalid age',
                message: 'please enter a valid age(age > 0)'
            });
            return;
        }
        //this function was created and passed down as props in App.js as the addUserHandler.Here it being called on props and is being used in conjuction with the username/age state
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username"
                           type="text"
                           ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;