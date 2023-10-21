import React from "react";
import "./Games.css";

export default function Games(props) {

    return(
        <div className="Games-section">
            <img className="Games-img" src={props.img} alt=""></img>
            <div className="Games-lowerBoxSection">
                <div>
                <h1 className="Games-title">{props.title}</h1>
                <h2 className="Games-description">{props.description}</h2>
                </div>
                <div className="Games-links">
                    <a href={props.repo}  target="_blank"  rel="noreferrer">
                    <button className="Games-githubCode">githubCode</button> </a>
                    <a href={props.app} target="_blank"  rel="noreferrer">
                    <button className="Games-Demo">Demo</button></a>
                </div>            
            </div>
        </div>
    )
}