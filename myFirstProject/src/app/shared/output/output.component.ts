import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Ricardo Silva", idade: 29},
    {nome: "Leoardo ", idade: 39},
    {nome: "Ariel", idade: 24},
    {nome: "Xande", idade: 122},
    {nome: "Odilene", idade: 45},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }
}
