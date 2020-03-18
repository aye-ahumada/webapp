import { Component, OnInit } from "@angular/core";
import { ProductoService } from "../../services/producto.service";
import { Producto } from "../../models/producto";

@Component({
  selector: "producto-add",
  templateUrl: "./producto-add.component.html",
  styleUrls: ["./producto-add.component.css"]
})
export class ProductoAddComponent implements OnInit {
  public titulo: string;
  public producto: Producto;

  constructor(private productoService: ProductoService) {
    this.titulo = "Crear un nuevo producto";
    this.producto = new Producto("", "", 0, "");
  }

  ngOnInit(): void {
    console.log("producto-add.component.ts cargado correctamente");
  }

  onSubmit() {
    console.log(this.producto);
    this.productoService.addProducto(this.producto).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
  }
}
