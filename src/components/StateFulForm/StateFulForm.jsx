import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState('SHEIKH SHAADI')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, password, email)
        if (password.length < 8) {
            setError('password must be 8 chacters or longger')
        }
        else {
            setError('')
        }
    }

    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    const handlenameChange = e => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handlenameChange}
                    type="text" value={name} name="name" placeholder="enter your name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" placeholder="enter your email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" required placeholder="enter your password" />
                {
                    error && <p>{error}</p>
                }
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFulForm;