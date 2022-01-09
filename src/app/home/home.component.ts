import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name=""

  show:boolean=true;
  display(){
    this.show!=this.show;
  }

  constructor() { }

  ngOnInit(): void {
  }

}