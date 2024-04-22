import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/data/interface/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {


  listaProductos: Producto [] = [];

  

  constructor() { }




  ngOnInit() {

    let product1: Producto ={id: 1, marca: "BMW", modelo: "J4", color: "Verde cromado", puertas: 2, matricula:"RHKS48D", categoria: "Deportivo", precio: 250000, vendedor: "Pedro Rodriguez", img:"assets/img/bmw.jpg"}
    let product2: Producto ={id: 2, marca: "FERRARI", modelo: "488 SPIDER", color: "Amarillo", puertas: 2, matricula:"FRGFD894",categoria: "Deportivo", precio: 750000, vendedor: "Luis Hernandez", img:"assets/img/ferrari.jpg" }
    let product3: Producto ={id: 3, marca: "TESLA", modelo: "X", color: "Rojo", puertas: 4, matricula:"EOKPSF798", categoria: "Cupé", precio: 450000, vendedor: "Maria Nevado", img:"assets/img/tesla.jpg"}
    let product4: Producto ={id: 4, marca: "PORSCHE", modelo: "CALLENE", color: "Blanco", puertas: 4, matricula:"HIJIF959", categoria: "Híbrido", precio: 930000, vendedor: "Tomas Muller", img:"assets/img/porsche.jpg"}
    let product5: Producto ={id: 5, marca: "PEUGEOT", modelo: "2008", color: "Naranja cromado", puertas: 4, matricula:"GSEG594", categoria: "Todoterreno", precio: 520000, vendedor: "Luka Modric", img:"assets/img/peugeot.jpg"}
    let product6: Producto ={id: 6, marca: "KIA", modelo: "EV09", color: "Azul", puertas: 4, matricula:"DFIAR979", categoria: "Sedane", precio: 630000, vendedor: "Hernesto Garcia", img:"assets/img/kia.jpg"}
    let product7: Producto ={id: 7, marca: "FORD", modelo: "FOCUS", color: "Rojo", puertas: 4, matricula:"OIPO989", categoria: "Todoterreno", precio: 340000, vendedor: "Joao Cancelo", img:"assets/img/ford.jpg"}
    let product8: Producto ={id: 8, marca: "MERCEDES-BENZ", modelo: "AMG-GT", color: "Negro", puertas: 2, matricula:"DSS8797", categoria: "Deportivo", precio: 12000000, vendedor: "Luigi Donarumma", img:"assets/img/mercedes.jpg"}
    let product9: Producto ={id: 9, marca: "LEXUS", modelo: "LBX", color: "Naranja cromado", puertas: 4, matricula:"HDIDF989", categoria: "Todoterreno", precio: 8900000, vendedor: "Xavi Hernanadez", img:"assets/img/lexus.jpg"}
    let product10: Producto ={id: 10, marca: "HONDA", modelo: "CIVIC", color: "Rojo", puertas: 2, matricula:"OIDF9879", categoria: "Todoterreno", precio: 430000, vendedor: "Matt Hoffman", img:"assets/img/honda.jpg"}

    this.listaProductos.push(product1)
    this.listaProductos.push(product2)
    this.listaProductos.push(product3)
    this.listaProductos.push(product4)
    this.listaProductos.push(product5)
    this.listaProductos.push(product6)
    this.listaProductos.push(product7)
    this.listaProductos.push(product8)
    this.listaProductos.push(product9)
    this.listaProductos.push(product10)

  }

  

}