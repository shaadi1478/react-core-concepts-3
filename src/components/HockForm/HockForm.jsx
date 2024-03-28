import useInputState from "../Hocks/useinputState";

const HockForm = () => {
    const [name, handleNameChange] = useInputState('SHEIKH SHAADI')

    const handleSubmit = e =>{
        console.log('form data', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HockForm;