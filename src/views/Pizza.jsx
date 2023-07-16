import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Contexto from "../context/Contexto";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Pizza = () => {
    const { id } = useParams();
    const { pizzas, agregarCarrito } = useContext(Contexto);

    const pizza = pizzas.find((p) => p.id === id);

    return (
        <Container className="mt-5">
            <Row className="borde">
                <Col md={5} className="pt-0 mt-1">
                    <img src={pizza.img} alt="pizza" className="img-fluid" />
                </Col>
                <Col md={7}>
                    <h1>{pizza.name}</h1>
                    <hr />
                    <p>{pizza.desc}</p>
                    <ul className="list-unstyled">
                        {pizza.ingredients.map((ing, i) => {
                            return <li key={i}>🍕{ing}</li>;
                        })}
                    </ul>
                    <div className="d-flex justify-content-between align-items-start p-2">
                        <p className="fw-5 fs-4 m-0">Precio: ${pizza.price}</p>

                        <Button variant="danger" onClick={() => agregarCarrito(pizza)}>
                            Añadir
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pizza;
