import React from 'react';

export default function Top() {
    const [message , setMessages] = React.useState(["a","b"])
    return (
        <div>
        {
            message.length === 0 ?
            <h1>You're all Caught up</h1> :
            <h1>You've {message.length} {message.length > 1 ? "meassages" : "message"}</h1>
        }
        </div>
    )
}