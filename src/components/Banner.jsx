import React from "react";
import profileImage from '../img/profile.png';
import "../css/Banner.css";
import Button from "./Button";

export default function Banner() {
	return <div className="banner-section">
        <div>
            <p>Hi, I’m</p>
            <p>Camila Paladines</p>
            <p>Frontend Web Developer</p>
            <Button value="Say hello" type="solid" />
            <Button value="Download CV" type="ghost" />
        </div>
        <img alt="Camila Paladines" src={profileImage}></img>
    </div>;
}
