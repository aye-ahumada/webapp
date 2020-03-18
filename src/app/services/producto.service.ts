import { Injectable, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { GLOBAL } from "./global";
import { Producto } from "../models/producto";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  public url = GLOBAL.url;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getProductos() {
    return this.http.get(this.url);
  }

  addProducto(producto) {
    console.log(producto);
    let { name, description, precio, imgURL } = producto;
    return this.http.post(this.url, { name, description, precio, imgURL });
  }
}
