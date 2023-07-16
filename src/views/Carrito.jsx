import React, { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import { Button, Container, Table } from "react-bootstrap";

const Carrito = () => {
    const {
        carrito,
        total,
        setCarrito,
        agregarCarrito,
        incrementarCantidad,
        decrementarCantidad,
        vaciarCarrito,
        eliminarPizza,
    } = useContext(Contexto);

    // useEffect(() => {}, [carrito]);

    return (
        <Container className="mt-5">
            <p className="display-5 fs-4">Detalles del pedido:</p>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre Pizza</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Aumentar o Disminuir Cantidad</th>
                        <th>Eliminar Pizza</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((p) => {
                        return (
                            <tr>
                                <td>
                                    <img src={p.img} alt="imagen" width={70} />
                                </td>
                                <td>{p.name}</td>
                                <td>{p.cantidad}</td>
                                <td>{p.price}</td>
                                <td>
                                    <Button
                                        className="me-2"
                                        variant="danger"
                                        onClick={() => decrementarCantidad(p.id)}>
                                        -
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => incrementarCantidad(p.id)}>
                                        +
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant="dark"
                                        onClick={() => eliminarPizza(p.id)}>
                                        Eiminar
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <p className="fw-5 display-5">Total: ${total}</p>
            <div className="d-flex justify-content-between">
                <Button variant="success">ir a Pagar</Button>
                <Button variant="dark" onClick={() => vaciarCarrito()}>
                    Vaciar Carrito
                </Button>
            </div>
        </Container>
    );
};

export default Carrito;
