import React , { Component } from "react";
import Todos from './components/Todos';
import './App.css';
import Header from "./components/layout/header";


class App  extends Component {
state = {
todos : [

{

  id: 1, 
  title: 'take out for dinner' , 
  completed: false  
} , 
{
  id: 2, 
  title: 'bring flower ' , 
  completed: false  
} , 
{

  id: 3, 
  title: 'study react' , 
  completed: false  
}
] }

delTodo = (id) => {
this.setState({todos: [...this.state.todos.filter(todo =>todo.id !==id)]}) ;

}

markComplete = (id) => {
this.setState({todos: this.state.todos.map(todo =>{
if(todo.id === id) {

  todo.completed=! todo.completed
}
return todo ; })
}) ; 
}

render (){
console.log(this.state.todos)
return (
<div className ="App">
  <Header>Header</Header>
<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo} />
</div>

    ) ; 

} 

}
  
export default App;

