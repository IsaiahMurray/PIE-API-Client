import React, {useState} from 'react';
import './Auth.css';

const Auth = (props) => {

    console.log('Auth', props);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup'
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ?
    (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <br/>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <br/>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <br/>
        </div>
    ) : null;

    const handleSubmit = (e) => {
        e.preventDefault();
        //Build url based off login position {true/false}
        const url = login ? 'http://localhost:3001/auth/signin' :
        'http://localhost:3001/auth/signup'

        const bodyObj = login ? {
            email: email,
            password: password
        } : {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.updateToken(json.sessionToken))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                <br/>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <button onClick={loginToggle}>{login ? 'Login' : 'Signup'}</button>
                <br/>
                <button type="submit">Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;