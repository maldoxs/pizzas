import React, { useContext, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";

const BarraNav = () => {
    const { total, setTotal, carrito } = useContext(Contexto);

    useEffect(() => {
        const totalPagar = () => {
            return carrito.reduce(
                (total, pizza) => total + pizza.cantidad * pizza.price,
                0
            );
        };

        const total = totalPagar();
        const formatear = (numero) => Intl.NumberFormat("es-CL").format(numero);
        const numeroFormateado = formatear(total);

        setTotal(numeroFormateado);
    });

    return (
        <Navbar className="color-fondo">
            <Container>
                <Link className="text-decoration-none text-white fs-4" to="/">
                    🍕 Pizzería Mamma Mia!
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link
                        className="text-white fw-bold text-decoration-none fs-4"
                        to="/carrito">
                        🛒${`${total}`}
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarraNav;
