import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";

const PizzaCard = ({ pizza }) => {
    const { agregarCarrito } = useContext(Contexto);

    const navigate = useNavigate();
    const navegarPizza = (id) => {
        navigate(`/pizza/${id}`);
    };

    return (
        <div className="">
            <Card style={{ width: "25rem" }} className="mt-5 mb-2 ">
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <Card.Text>
                        <ul className="list-unstyled">
                            {pizza.ingredients.map((ing, i) => {
                                return <li key={i}>🍕{ing}</li>;
                            })}
                        </ul>
                    </Card.Text>
                    <Card.Text className="fs-4 fw-4">${pizza.price}</Card.Text>

                    <Button variant="primary me-2" onClick={() => navegarPizza(pizza.id)}>
                        Detalle
                    </Button>
                    <Button variant="danger" onClick={() => agregarCarrito(pizza)}>
                        Añadir
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PizzaCard;
