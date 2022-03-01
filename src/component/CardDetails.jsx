import { Card, Badge, Row } from "react-bootstrap";
function CardDetails(props){
    // console.log(props)
    return(
        <Card xs="auto" variant="outline-dark" className="d-flex" style={{padding:"20px"}}>
        <Card.Title style={{ display: "inline" }}>
          <div style={{ textDecoration: "underline", paddingRight:"20%" }}>
            <h1 style={{display:"inline", paddingRight:"2%"}}>{props.title}</h1>
            {
              props.tags.map((item)=>{
                return <label style={{paddingRight:"1%"}}><Badge bg="secondary" pill>{"#"+item}</Badge></label>
              })
            }
          </div>
          <span>
            Category: <Badge bg="success">{props.category}</Badge>{" "}
          </span>{" "}
        </Card.Title>

        <Card.Img
          style={{ width: "20%", paddingBottom: "3%" }}
          src={props.thumbNail}
        ></Card.Img>

        <Card.Text>
          <>
            <h4>
              <a href={props.youtube}>
                <Badge bg="danger">{"Youtube "}</Badge>
              </a>
              <a style={{ margin: "20px" }} href={props.source}>
                <Badge bg="dark">{"Source "}</Badge>
              </a>
            </h4>
            <>
              <h3>
                  <h2>Instruction: </h2>
                <pre >{props.instruction}</pre>
              </h3>
            </>
          </>
        </Card.Text>
        <h3>
          <Badge >{"Ingredient"}</Badge>{" "}
        </h3>
        <span style={{ marginTop: "50px" }}>
          {props.ingredient.map((item) => {
            return (
              <Badge
                pill
                bg="dark"
                style={{
                  padding: "6px 15px 3px 15px",
                  margin: "0px 10px 10px 0px",
                }}
              >
                <h6>{item["item"] +" : " +item["measure"]}</h6>
              </Badge>
            );
          })}
        </span>
      </Card>

    )
 }

export default CardDetails ;