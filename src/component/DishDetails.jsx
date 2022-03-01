import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
function DishDetails(props) {
  const [meal, setMeal] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setMeal(props.meal);
  }, [props.meal]);
  useEffect(() => {
    getIngredientList();
    getTags();
  }, [meal]);

  function getTags() {
    if (meal.length === 0) return;
    let tag = meal[0]["strTags"]
    if(tag===null){
      // console.log("this is null tag")
      tag=[]
    }else{
      tag=tag.split(",");
    }
    // console.log("tags are: ",tag)
    setTags(tag);
  }
  function filterFunction(key) {
    if (key.startsWith("strIngredient") && meal[0][key]) {
      return true;
    }
  }

  function getIngredientList() {
    // console.log("function called: ", meal);
    if (meal.length === 0) {
      return;
    }
    const tag = meal[0]["strTags"];
    // console.log("tag: ", tag);
    let temp = Object.keys(meal[0]).map((key) => {
      if (filterFunction(key)) {
        const ingredientName = meal[0][key];
        const ingredientNumber = onlyNumbers(key);
        const keyMeasure = "strMeasure" + ingredientNumber;
        const ingredientMeasure = meal[0][keyMeasure];
        const obj = { item: ingredientName, measure: ingredientMeasure };
        return obj;
      }
    });
    // console.log(temp);
    const temp2 = temp.filter((item) => {
      return item;
    });
    // console.log("this is temp : ", temp2);
    setIngredient(temp2);
  }

  function onlyNumbers(text) {
    // console.log("this is inside", text.replace(/strIngredient|/, ""), text);
    return text.replace(/strIngredient|/, "");
  }

  if (meal === null || meal.length === 0) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  }

  return (

    <CardDetails
      title={meal[0].strMeal}
      category={meal[0].strCategory}
      thumbNail={meal[0].strMealThumb}
      youtube={meal[0].strYoutube}
      source={meal[0].strSource}
      instruction={meal[0].strInstructions}
      ingredient={ingredient}
      tags={tags}
    />
  );
}

export default DishDetails;
