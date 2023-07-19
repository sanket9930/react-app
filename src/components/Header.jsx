import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Random Meme Generator</h2>
            <h4 className="header--project"></h4>
        </header>
    )
}