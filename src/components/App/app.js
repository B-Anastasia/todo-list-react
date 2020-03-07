import React, {Component} from 'react';
import AppHeader from "./../Header/app-header";
import './app.scss';
import Center from "./../Center/center";

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink coffee', important: false, id: 1 },
            { label: 'I know React', important: true, id: 2 },
            { label: 'I am working as React Developer', important: true, id: 3 }
        ]
    };

    toDeleteItem = (id) =>{
        this.setState(({todoData})=>{
            const index = todoData.findIndex((el) =>el.id===id);
            console.log(index);
            const newArray =[ ...todoData.slice(0, index),...todoData.slice(index+1)];
            console.log(newArray);
            return {
                todoData: newArray
            }
        });
    };

    render(){
        return(
            <div className="main">
                <AppHeader toDo={1} done={3}/>
                <Center todos={this.state.todoData} toDeleteItem={this.toDeleteItem}/>
            </div>
        );
    }
};
