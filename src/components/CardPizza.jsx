import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ detalles }) => {
  const { agregarPizza } = useContext(CartContext);

  return (
    <Card className="pizzas" style={{ width: "23rem" }}>
      <Card.Img variant="top" src={detalles.img} />
      <Card.Body>
        <Card.Title>Pizza {detalles.name}</Card.Title>
        <Card.Text>{detalles.desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="centrado">🍕 Ingredientes:</p>
          <div className="listaIngredientes">
            <ul>
              {detalles.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <p className="centrado precio">
          Precio: ${detalles.price.toLocaleString("es-CL")}
        </p>

        <div className="botonesSeparados">
          <Button variant="light" className="botonVermas">
            Ver más 👀
          </Button>
          <Button variant="dark" onClick={() => agregarPizza(detalles)}>
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
