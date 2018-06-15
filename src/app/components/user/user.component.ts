import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:String;
  private age:number;
  private email:String;
  
  private adress:{
    street:String;
    city:String;
    province:String;
    postcode:String;
  } 

  private skills:String[];

  constructor(todoService:TodoService) {     

  }

  ngOnInit() {
    this.name = "Por InitAngular";
    this.age = 30;
    this.email = "amornjitranon@gmail.com";
  
    this.adress = {
      street: "201 Samambinname Rode",
      city:"Bangkok",
      province:"Nontaburi",
      postcode:"11000"
    };

    this.skills=["Programing","Badbintan"];
  }
  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }
  removeSkill(skill){
    this.skills.forEach((element, index) => {
      if(element == skill){
        this.skills.splice(index, 1);
      }
    });
  }
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

