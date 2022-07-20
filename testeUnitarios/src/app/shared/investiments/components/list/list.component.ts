import { Component, OnInit } from '@angular/core';

//Model
import { Investiments } from '../../model/investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {name: 'itau', value: 100},
    {name: 'Brasil', value: 100},
    {name: 'Banpara', value: 100},
    {name: 'Bradesco', value: 100},
  ]
  constructor(private listInvestimentsService: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestimentsService.list().subscribe(
      res =>  console.log(res)
    )
  }

}
