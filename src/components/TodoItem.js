import React, { Component } from 'react' ;

export class TodoItem extends Component {

    getStyle = () => {

            return { 
                background: '#f4f4f4' ,
                padding:'10px',
                borderBottem: '1px #ccc dotted' ,
                textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
             }

    }   

    render() {
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.markComplete}/> { '  '} 
                    { this.props.todo.title } </p>
            </div>
        )
    }
}
export default TodoItem
