import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {
  public titulo: string;
  productos: any

  constructor(
    private api: ProductoService,
  ) {
    this.titulo = 'Listado de productos';
  }

  ngOnInit() {
    this.api.getProductos().subscribe(
      res => {
        console.log(res)
        this.productos = res
      },
      err => console.log(err)
    )
    console.log('productos-list.component.ts cargado correctamente');
  }

}
