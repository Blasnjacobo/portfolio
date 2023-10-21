import React from "react";
import "./Repository.css";

export default function Repository(props) {

    return(
        <div className="Repository-section">
            <img className="Repository-img" src={props.img} alt=""></img>
            <div className="Repository-lowerBoxSection">
                <div>
                <h1 className="Repository-title">{props.title}</h1>
                <h2 className="Repository-description">{props.description}</h2>
                </div>
                <div className="Repository-links">
                    <a href={props.repo}  target="_blank"  rel="noreferrer">
                    <button className="Repository-githubCode">Github Code</button> </a>
                    <a href={props.app} target="_blank"  rel="noreferrer">
                    <button className="Repository-Demo">Demo</button></a>
                </div>            
            </div>
        </div>
    )
}