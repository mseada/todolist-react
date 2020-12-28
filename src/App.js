import React , { Component } from "react";
import Todos from './components/Todos';
import './App.css';


class App  extends Component {
state = {
todos : [

{

  id: 1, 
  title: 'take out for dinner' , 
  completed: true  
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


render (){
console.log(this.state.todos)
return (
<div className ="App">
<Todos todos={this.state.todos}/>
</div>

    ) ; 

} 

}
    


export default App;

