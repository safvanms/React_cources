import React from "react";

export default function Apis() {
     const [starWarsData, setStarWarsData] = React.useState({})
          const [count , setCount ] = React.useState(1 )

     console.log('Component Rendered')


     React.useEffect(()=>{


          console.log("Effect function ran")


          fetch(`https://swapi.py4e.com/api/people/${count}`)
               .then(res => res.json())
               .then(data => setStarWarsData(data))




     },[count])
          
     const styles ={
          heading :{

               fontSize : "40px",
               color : "green"
          },
          button : {
               width : "150px",
               height : "40px",
               fontSize : "15px"
          }
     }



     return (
          <div>
               <pre><h3>{JSON.stringify(starWarsData, null, 2)}</h3></pre>
               <h1 style={styles.heading}>count is : {count}</h1>
               <button style={styles.button} onClick={() => setCount(prevCount => prevCount + 1)}>Clickedaaaa click</button>
          </div>
     )
}