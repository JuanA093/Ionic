import { Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import { Rating } from '../../interface/rating.model';
import { Producto } from '../../interface/producto.model';




@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.scss'],
})




export class CrearProductosComponent implements OnInit {


    idInput: number = 0;
    marcaInput: string= '';
    modeloInput: string = '';
    colorInput: string = '';
    puertasInput: number = 0;
    matriculaInput: string = '';
    categoriaInput: string = '';
    precioInput: number = 0;
    vendedorInput: string = '';
    imgInput: string = '';

    rateInput:number = 0;
    countInput:number = 0;
  

    @Input() 
    mensajePadre: string = '';
  

    @Output()
    eventoCrearProducto = new EventEmitter<Producto>()

  constructor() { }

  ngOnInit() {}

  guardarProducto(){

    let addProduct: Producto = {

      id: this.idInput,
      marca: this.marcaInput,
      modelo: this.modeloInput,
      color: this.colorInput,
      puertas: this.puertasInput, 
      matricula: this.matriculaInput,
      categoria: this.categoriaInput,
      precio: this.precioInput,
      vendedor: this.vendedorInput,
      img: this.imgInput,

      rating: {
        
        rate: this.rateInput,
        count: this.countInput

      }

    }
    
    this.eventoCrearProducto.emit(addProduct);




  }
}



