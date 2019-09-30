export default class Inventario{
    constructor(tableArt,tableInfo){
        this._tableArt = tableArt;
        this._tableInfo = tableInfo;
        this._numArt = 0;
        this._precio = 0;
        this._articulos = [];
        console.log(this._articulos);
    }

    _borrar(row,articulo){
        let btnBorrar = document.createElement("input");
        btnBorrar.type="button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        btnBorrar.addEventListener("click",()=>{
          this.borrarArticulo(row, articulo);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnBorrar);
    }

    AgregarATabla(articulo){
        let row = this._tableArt.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
        

        cellCodigo.innerHTML = articulo.codigo;
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;
        cellDescripcion.innerHTML = articulo.descripcion;
        this._borrar(row,articulo);

        
        this._numArt++; 

        
        this._precio += (articulo.precio * articulo.cantidad);

        this._tableInfo.rows[0].cells[1].innerHTML = this._numArt;
        this._tableInfo.rows[1].cells[1].innerHTML = this._precio;

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descipcion: articulo.descripcion
        };

        this._articulos.push(objArticulo);
        console.log(this._articulos)
    }
    borrarArticulo(row,articulo){
        let pos = this._buscarArticulo(articulo.codigo);
        this._articulos.splice(pos, 1);
        row.remove();
    }
    
    _buscarArticulo(codigo){
        let result = -1;
        this._articulos.forEach((articulo, index) =>{
          if(articulo.codigo===codigo){
            result = index;
            return;
          }
        });
        return result;
      }  
}