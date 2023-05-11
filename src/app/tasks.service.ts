import { Injectable } from '@angular/core';

interface Task{
  title: string;
}

@Injectable()
export class TasksService {
private list : Array<Task>=[];
  constructor() { }

  add(title:string){
    this.list.push({title});
  }

  remove(index: number){
    this.list.splice(index, 1);
  }

  getList(){
    return this.list;
  }
}