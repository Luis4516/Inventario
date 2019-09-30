import Articulo from "./Articulo.js";
import Inventario from "./Inventario.js";

class Main{
    constructor(){
        let inventario = new Inventario(
            document.querySelector("#tableArt"),
            document.querySelector("#tableInfo")
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",() => {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let precio = Number(document.querySelector("#precio").value);
        let cantidad = document.querySelector("#cantidad").value;
        let descripcion = document.querySelector("#descripcion").value;
        let toString = document.querySelector("#toString");
        
        let objArticulo = {
            codigo: codigo,
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            descripcion: descripcion
        };

        let articulo = new Articulo(objArticulo);
        if(inventario._contadorV<20){
            inventario.AgregarATabla(articulo);
            inventario.AgregarProducto(articulo);
            inventario._ordenarArt();
            console.log(inventario._articulos)
        }
        else{
            alert('Se ha completado el limite de articulos');
        }
        
        toString.textContent = articulo.toString();
    });
    
    }
}

var m = new Main()