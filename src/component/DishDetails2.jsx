import { useEffect, useState } from "react"

function DishDetails2(props){
    console.log("this is props: ",props.meal)
    const [mealFinal,setMealFinal]=useState(props.meal)

        return(
        <div>
            {/* <img src={props.meal.strMealThumb}></img> */}
           
        </div>)
  
}

export default DishDetails2