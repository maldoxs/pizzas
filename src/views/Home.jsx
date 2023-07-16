import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
    const { pizzas } = useContext(Contexto); //sacamos del contexto las pizzas a una variable
    // console.log("Dentro de Home");
    // console.log(pizzas);

    return (
        <div>
            <header>
                <div className="foto d-flex justify-content-center align-items-center mb-3">
                    <div className="d-flex-column">
                        <h2 className="text-white display-2 fw-bold">
                            !Pizzería Mamma Mia!
                        </h2>
                        <p className="text-center text-white">
                            !Tenemos las mejores pizzas que podrás encontran!
                        </p>
                        <hr className="fondo" />
                    </div>
                </div>
            </header>
            <Container className="mb-5">
                <Row>
                    {pizzas.map((p, i) => {
                        return (
                            <Col sm={12} md={6} lg={4} key={i}>
                                <PizzaCard pizza={p}></PizzaCard>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
