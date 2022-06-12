import React from "react";

const Header = ()=> {
    
return(
    <div>
        <label>Ordenar </label>
        <select>
            <option> A-Z </option>
            <option> Z-A </option>
            <option> Ascendente </option>
            <option> Descendente </option>
        </select>
        <label> ≥ </label>
        <input></input>
        <button> Borrar filtros </button>
    </div>
);
}
export default Header