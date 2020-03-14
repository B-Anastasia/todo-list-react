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

    //Function to toggle property

    toToggleProperty( arr, id, propertyName ){

            const index = arr.findIndex( el => el.id === id );
            const oldItem = arr[index];
            const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName]};     // 1. update object

            return [                                                                 //2. create new array
                ...arr.slice( 0, index),
                newItem,
                ...arr.slice( index + 1 )
            ];
    }

    onToggleImportant = ( id ) => {

        this.setState ( ( {todoData} ) => {
            return {
                todoData: this.toToggleProperty( todoData, id, 'important' )
            };

        });

    };

    onToggleDone = ( id ) => {

        this.setState ( ( {todoData} ) => {
            return {
                todoData: this.toToggleProperty( todoData, id, 'done' )
            };
        });
    };

    render(){
        const {todoData} = this.state;

        const countDone = todoData.filter( el => el.done ).length;
        const countToDo = todoData.length - countDone;

        return(
            <div className="main">
                <AppHeader toDo={countToDo} done={countDone}/>
                <Center
                    todos={todoData}
                    toDeleteItem={this.toDeleteItem}
                    toAddItem={this.toAddItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        );
    }
};

// onToggleImportant = (id) =>{
//
//     this.setState(({todoData})=>{
//
//         const index = todoData.findIndex( el => el.id === id );
//         const oldItem = todoData[index];
//         const newItem = { ...oldItem, important: !oldItem.important};
//
//         const newArary = [
//             ...todoData.slice( 0, index),
//             newItem,
//             ...todoData.slice( index + 1 )
//         ];
//
//         return {
//           todoData: newArary
//         };
//
//     });
//
//     console.log(`Toggle IMPORTANT element ${id}`);
// };

// onToggleDone = (id) =>{
//     this.setState(({todoData})=>{
//
//         const index = todoData.findIndex((el)=> el.id===id);
//         // 1. update object
//         const item = todoData[index];
//         // const done = !todoData[index]['done'];
//         const newItem={...item,done: !item.done};
//         //2. create new array
//         const newArray = [
//             ...todoData.slice(0,index),
//             newItem,
//             ...todoData.slice(index+1)
//         ];
//         return{
//            todoData : newArray
//         };
//     });
//     // console.log(`Toggle DONE element ${id}`);
// };

