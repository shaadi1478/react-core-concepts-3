import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState(null)

    useEffect(() =>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        if(passwordRef.length < 8){
            setError('password must be 8 charcets or longger')
        }
        else{
            setError('')
        }
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="enter your name" />
                <br />
                <input ref={emailRef} defaultValue={'example@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                {
                    error && <p>{error}</p>
                }
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;