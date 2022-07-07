import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public addValue: number = 10

  public getDados: {nome: string, idade: number} | undefined
  constructor(){

  }
  public add(){
    this.addValue++
  }
  public setDados(event: {nome: string, idade: number}){
    this.getDados = event
  }
  title = 'myFirstProject';
}
