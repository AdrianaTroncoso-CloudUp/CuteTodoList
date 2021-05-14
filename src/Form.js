import React,{useState} from 'react'
let passwordSubm ="";
let userSubm ="";
function Form() {


    const initialFormData = Object.freeze({
        username: "",
        password: ""
    });




        const [formData, updateFormData] = React.useState(initialFormData);
    
        const handleChange = (e) => {
        updateFormData({
            ...formData,
    
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
        };
    
        const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        passwordSubm = formData.password;
        userSubm = formData.username;
        // ... submit to API or something
        };
    
        return (
        <>
            <label>
            Username 
            <input name="username" onChange={handleChange} />
            </label>
            <br />
            <label>
            Password
            <input name="password" onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <h1>Username: {userSubm}</h1>
            <h1>PAssword: {passwordSubm}</h1>
        </>
        );
    

}
 
export default Form 