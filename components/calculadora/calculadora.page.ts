import { Component, OnInit, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  dato1: number = 0;
  dato2: number = 0;
 
  par: boolean = false;
  facRes: number = 0;
  fibonacciSeries: number[] = [];
  resultado: number = 0;
 
   constructor() { }
 
   ngOnInit() {
     console.log("Inicio customer")
 
   }
 
   guardarNombre():void{
 
     alert("Nombre guardado");
 
 
   }
 
   sumar():void{
     this.resultado = this.dato1 + this.dato2
     this.parInpar();
     
   }
 
   restar():void{
     this.resultado = this.dato1 - this.dato2
     this.parInpar();
 
   }
   multiplicar():void{
     this.resultado = this.dato1 * this.dato2
     this.parInpar();
     
   }
   dividir():void{
     this.resultado = this.dato1 / this.dato2
     this.parInpar();
     
   }
 
   modulo():void{
     this.resultado = this.dato1 % this.dato2
     this.parInpar();
     
   }
 
   factorial():void{
 
     let facRes = 1;
 
     for(let i = 1; i <= this.resultado; i++){
       facRes *= i;
     
     }
 
     this.facRes = facRes;
   
   }
 
   parInpar():void{
 
 
     if(this.resultado% 2 == 0){
     this.par = true;
     }else {
 
     this.par = false;
     }
 
   }
 
   Calcularfibonacci(n: number): number[]{
     let fibonacciSeries: number[] = [];
 
     for(let i=0 ; i < n;i++){
 
       fibonacciSeries.push(this.fibonacci(i));
 
     }
 
     return fibonacciSeries;
 
   }
 
   fibonacci(n:number): number{
 
     if(n <= 1){
       return n;
     }
     else{
       return this.fibonacci(n - 1) + this.fibonacci(n-2);
     }
 
   
 
 
   }
 
   llamarFibonacci(){
     this.fibonacciSeries = this.Calcularfibonacci(this.resultado);
   }
 
 
 
 
 }