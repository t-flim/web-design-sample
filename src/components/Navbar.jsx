import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <nav id="nav">
            <NavLink to="/" className="">Home</NavLink>
            <NavLink to="/about" className="">About</NavLink>
            <NavLink to="/products" className="">Products</NavLink>
            <NavLink to="" className="">Contact</NavLink>
        </nav>
    )
}

export default Navbar