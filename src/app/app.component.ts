import { Component } from '@angular/core';
import { DataService } from './data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baap';
  userArray:any=[]
  constructor(private user:DataService)
  {
    this.user.getData().subscribe((data:any)=>{
      console.warn("data",data)
       this.userArray=data.data
    })
  }
}
