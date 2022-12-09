import React from "react";

export default function Joke(props) {
    console.log("props :", props)
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevIsShown => !prevIsShown)
    }


    return (

        <div>
            {props.setup && <h2>{props.setup}</h2>}
            {isShown && <h3>{props.punchline}</h3>}
                < button onClick={toggleShown} >{isShown ? "Hide" : "Show"} Punchline</button>
                <hr />
            </div >
                )

}