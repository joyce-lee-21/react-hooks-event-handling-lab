// Code Keypad Component Here
function Keypad() {
    function password() {
        console.log("Entering password...")
    }

    return (
        <input type="password" onChange={password}/>
    )
}

export default Keypad;
