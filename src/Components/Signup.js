import React from "react";
import { userCredentials } from "../Atoms/AllAtoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { green, orange } from "@mui/material/colors";
import { Card } from "@mui/material";

const Signup = () => {
    const user = useRecoilValue(userCredentials);
    const setUser = useSetRecoilState(userCredentials);

    const handleUserName = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            name: e.target.value
        }));
    }

    const handleUserEmail = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            email: e.target.value
        }));
    }

    const handlePassword = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            password: e.target.value
        }))
    }

    const handleSignupData = () => {
        console.log(user.name);
        console.log(user.email);
        console.log(user.password);
    }

    return <div className="signup-container" style={{
        justifyContent: "center",
        display: "flex",
        padding: 200,
        backgroundColor: "cement"
    }}>
        <Card style={{
            height: 900,
            width: 600,
            textAlign: "center",
            borderRadius: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            border: 1,
            backgroundColor: "cement"
        }}>
            <h2>Please sign-up with mail and password</h2>
            <div className="contact-form-container">
                <label>Email:</label>
                <input type="text" placeholder="yourmail@gmail.com"/>
            </div>
            <div className="contact-form-container">
                <label>Name:</label>
                <input type="text" placeholder="your name"/>
            </div>
            <div className="contact-form-container">
                <label>Password:</label>
                <input type="password" placeholder=""/>
            </div>
            
            <button className="secondary-button" onClick={handleSignupData}>Submit</button>
        </Card>
    </div>
};

export default Signup;