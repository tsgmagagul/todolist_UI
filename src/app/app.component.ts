import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoItem:any = {
    todo_id: 0,
    title:'',
    description:''
  };
  todoItemArray:any[] =[];
  public CurrentDate = Date.now();
  constructor(){
    setInterval(() => {
      this.CurrentDate = Date.now();
    },100);
  }
ngOnInit(): void {
  const localData =localStorage.getItem('todoItems')
if (localData != null)
{
this.todoItemArray = JSON.parse(localData);

}

   
}
  onItemAdd()
{
  debugger
  this.todoItem.todo_id = this.todoItemArray.length +1;
  this.todoItemArray.push(this.todoItem)
  localStorage.setItem('todoItems',JSON.stringify(this.todoItemArray));
  this.todoItem={
    title:'',
    description:''
  }

  
}
onEdit(item:any){
debugger
this.todoItem= item;
this.onItemAdd();

}
onDelete(id:number){
for(let i = 0; i< this.todoItemArray.length; i++)
{
  if (this.todoItemArray[i].todo_id == id){
this.todoItemArray.splice(i,1);
  }
}
}



}



