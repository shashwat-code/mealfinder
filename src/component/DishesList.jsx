import { Col, Container, Row } from "react-bootstrap";
import Dish from "./Dish";

function DishesList(props){
    const arr = props.dishes
    // console.log(props)
    if(!arr){
        return(
            <></>
        )
    }
    return(
        
        <Row xs="auto" >
            {/* {console.log("this happend")} */}
            {
                arr.map(item=>{
                    return <Col key={item.idMeal} style={{padding:"0.7rem"}} ><Dish key={item.idMeal} item={item} setSelectedDish={props.setSelectedDish} /></Col>
                })
            }
        </Row>
    )

}
export default DishesList;