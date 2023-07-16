import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import Contexto from "./context/Contexto";
import { useEffect, useState } from "react";
import BarraNav from "./components/BarraNav";
import Footer from "./components/Footer";

function App() {
    const [pizzas, setPizzas] = useState([]);
    const [total, setTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = ({ id, name, img, price }) => {
        const index = carrito.findIndex((p) => p.id === id);
        if (index >= 0) {
            carrito[index].cantidad++;
            setCarrito([...carrito]);
        } else {
            carrito.push({ id: id, cantidad: 1, name, img, price });
            setCarrito([...carrito]);
        }
    };

    const incrementarCantidad = (id) => {
        const index = carrito.findIndex((producto) => producto.id === id);
        carrito[index].cantidad++;
        setCarrito([...carrito]); //actualizamos el carrito
    };

    const decrementarCantidad = (id) => {
        const index = carrito.findIndex((producto) => producto.id === id);
        if (carrito[index].cantidad <= 1) return;
        carrito[index].cantidad--;
        setCarrito([...carrito]);
    };

    const eliminarPizza = (id) => {
        //vmos a rscribir el carrito y traer todos los registros q sean distintos al id enviado x parametro
        let eliminaPizza = carrito.filter((producto) => producto.id !== id);
        setCarrito([...eliminaPizza]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const obtenerDatos = async () => {
        const res = await fetch("http://localhost:5173/pizzas.json");
        const data = await res.json();
        setPizzas([...data]);
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    return (
        <Contexto.Provider
            value={{
                pizzas,
                total,
                setTotal,
                carrito,
                setCarrito,
                agregarCarrito,
                incrementarCantidad,
                decrementarCantidad,
                vaciarCarrito,
                eliminarPizza,
            }}>
            <BrowserRouter>
                <BarraNav />
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
                    <Route path="/carrito" element={<Carrito></Carrito>}></Route>
                    <Route path="*" element={<h1>Pagina no encontrada</h1>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </Contexto.Provider>
    );
}

export default App;

// componentes asociados a las vistas en la carpeta views
//componentes mas pequeños q son parte de otros componentes en la carpeta Components
