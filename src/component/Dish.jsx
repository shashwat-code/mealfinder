import { useState } from "react";
import { Card } from "react-bootstrap";

function Dish(props){
    const dish=props.item
    // console.log("this is props: ",props)
    const [display,setDisplay]=useState('none')
    return(
        <Card border="dark" className="dish" onMouseEnter={()=>{setDisplay("block")}} onMouseLeave={()=>{setDisplay('none')}} style={{ width: '18rem' }} onClick={()=>{props.setSelectedDish(dish)}}>
            <Card.Img src={dish.strMealThumb}></Card.Img>
            <h2 className="dishName" style={{display:display}}>{dish.strMeal}</h2>
        </Card>
     
    )

}

export default Dish;