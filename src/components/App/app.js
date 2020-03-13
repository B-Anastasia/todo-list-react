import React, {Component} from 'react';
import AppHeader from "./../Header/app-header";
import './app.scss';
import Center from "./../Center/center";

export default class App extends Component {
    maxId=100;

    state = {
        todoData: [
            this.createNewItem("Drink coffee"),
            this.createNewItem("I know React"),
            this.createNewItem("I am working as React Developer")
        ]
    };

    createNewItem(text){
        return {
            label:text,
            important: false,
            done: false,
            id: this.maxId++
        }
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

    toAddItem = (text) =>{
        console.log(`Added ${text}`);
        this.setState(({todoData})=>{

            const newItem = this.createNewItem(text);
            const newArray = [...todoData, newItem];
            return{
                todoData: newArray
            }
        });
    };

    onToggleImportant = (id) =>{
        console.log(`Toggle IMPORTANT element ${id}`);
    };
    onToggleDone = (id) =>{
        this.setState(({todoData})=>{
            const index = todoData.findIndex((el)=> el.id===id);
            // 1. update object
            const item = todoData[index];
            // const done = !todoData[index]['done'];
            const newItem={...item,done: !item.done};
            //2. create new array
            const newArray = [
                ...todoData.slice(0,index),
                newItem,
                ...todoData.slice(index+1)
            ];
            return{
               todoData : newArray
            };
        });
        console.log(`Toggle DONE element ${id}`);
    };



    render(){
        return(
            <div className="main">
                <AppHeader toDo={1} done={3}/>
                <Center
                    todos={this.state.todoData}
                    toDeleteItem={this.toDeleteItem}
                    toAddItem={this.toAddItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        );
    }
};
