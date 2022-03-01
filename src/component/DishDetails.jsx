import { useEffect, useState } from "react";
import { Card, Badge, Row } from "react-bootstrap";

function DishDetails(props) {
  const [mealFinal, setMealFinal] = useState([]);
  const [ingredient, setInd] = useState([]);
  const [check, setCheck] = useState([]);
  useEffect(() => {
    setMealFinal(props.meal);
    getId();
  }, [props.meal]);

  function getId() {
    console.log("function called: ", mealFinal);
    if (mealFinal.length === 0) {
      return;
    }
    let temp = Object.keys(mealFinal[0]).filter((key) => {
      if (
        key.startsWith("strIngredient") &&
        mealFinal[0][key] &&
        mealFinal[0][key] !== ""
      ) {
        var value = mealFinal[0][key];
        const obj = { id: mealFinal[0][key], md: value };
        console.log(obj);
        setCheck([...check, obj]);
        return <div>{value}</div>;
      }
    });
    console.log("inside getId: ", temp);
    setInd(temp);
  }

  function onlyNumbers(text) {
    return text.replace(/\D/g, "");
  }

  if (mealFinal === null || mealFinal.length === 0) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  } else {
    return (
      <Card xs="auto" variant="outline-dark" className="d-flex">
        <Card.Title style={{ display: "inline" }}>
          <h1 style={{ textDecoration: "underline" }}>
            {mealFinal[0].strMeal}
          </h1>
          <span>
            Category: <Badge bg="success">{mealFinal[0].strCategory}</Badge>{" "}
          </span>{" "}
        </Card.Title>

        <Card.Img
          style={{ width: "20%", paddingBottom: "3%" }}
          src={mealFinal[0].strMealThumb}
        ></Card.Img>

        <Card.Text>
          <>
            <h4>
              <a href={mealFinal[0].strYoutube}>
                <Badge bg="danger">{"Youtube "}</Badge>
              </a>
              <a style={{ margin: "20px" }} href={mealFinal[0].strSource}>
                <Badge bg="dark">{"Source "}</Badge>
              </a>
            </h4>
            <>
              <h3>
                  <h2>Instruction: </h2>
                <pre style={{overflow:"hidden"}}>{mealFinal[0].strInstructions}</pre>
              </h3>
            </>
          </>
        </Card.Text>
        <h3>
          <Badge>{"Ingredient"}</Badge>{" "}
        </h3>
        <span style={{ marginTop: "50px" }}>
          {ingredient.map((item) => {
            console.log("key", item);
            console.log(check);
            console.log(onlyNumbers(item));
            return (
              <Badge
                pill
                bg="dark"
                style={{
                  padding: "6px 15px 3px 15px",
                  margin: "0px 10px 10px 0px",
                }}
              >
                <h6>
                  {mealFinal[0][item] +
                    " : " +
                    mealFinal[0]["strMeasure" + onlyNumbers(item)]}
                </h6>
              </Badge>
            );
          })}
        </span>
      </Card>
    );
  }
}

export default DishDetails;
