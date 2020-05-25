import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    {headerName: 'make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'model', field: 'model'},
    {headerName: 'price', field: 'price'}
  ];
  rowData = [
    {make: 'toyota', model: 'celica', price:1234},
    {make: 'tesla', model: 'd3', price:4321},
    {make: 'tesla', model: 'd4', price:4321},
    {make: 'audi', model: '2019', price:1111}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
