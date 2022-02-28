import { useState, useEffect } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import DishesList from "./component/DishesList";
import DishDetails from "./component/DishDetails";
function App() {
  const [dishesArray, setDishesArray] = useState([]);
  const [name, setName] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    selectedDish ? setDisplay("block") : setDisplay("none");
  }, [selectedDish]);
  const fetchDishes = (name) => {
    setDisplay('none')
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => res.json())
      .then((response) => setDishesArray(response.meals));
  };
  const shuffleData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((response) => {
        console.log("this is response",response)
        setDishesArray(response.meals);
      });
    setDisplay("none");
  };
  console.log(dishesArray)
  // useEffect(fetchDishes, [name]);
  return (
    <BrowserRouter>
      <Container>

        <Row xs={12} style={{ padding:"20px"}}>
        <Col md={3} > <h1>Meal Finder</h1></Col>
          <Col >
          <InputGroup
            style={{width:"55%", paddingTop:"6px"}}
          >
              <FormControl
                value={name}
              md={5}
              
                variant="outline-dark"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Dish name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            
           
            <Link to="/dishesList">
              <Button
                disabled={name.length?false:true}
                variant="outline-dark"
                onClick={() => {
                  fetchDishes(name);
                  setName("");
                }}
              >
                Search
              </Button>
            </Link>
            <span style={{paddingLeft:"1rem"}}></span>
            <Link to="/dishDetails">
              
            <Button variant="outline-dark"
            
            onClick={shuffleData}>
              Shuffle
            </Button>
          </Link>
          </InputGroup>
          </Col>

          
        </Row>
        <Routes>
          <Route
            path="/dishesList"
            element={
              <DishesList
                dishes={dishesArray}
                setSelectedDish={setSelectedDish}
              />
            }
          ></Route>
          <Route
            path="/dishDetails"
            element={<DishDetails meal={dishesArray} />}
          />
        </Routes>
        <div style={{ display: display }}>
          {display === "none" ? (
            <div></div>
          ) : (
            <DishDetails meal={[selectedDish]} />
          )}
        </div>
        {/* <DishesList dishes={dishesArray} /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
