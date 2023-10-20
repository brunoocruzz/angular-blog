import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://img6.fresherslive.com/latestnews/2023/10/is-tony-stark-dead-in-real-life-2023--what-happened-to-tony-stark--652f630ee3fc012620846-1200.webp";
  @Input()
  cardTitle:string = "Lorem ipsum dolor sit amet, consectetur adip";
  @Input()
  cardDescription:string = "";
  @Input()
  Id:string = "0";

  constructor () {

  }

  ngOnInit() {

  }
}
