import React from 'react';
import './list-item.scss';
import Button from "../../../Button/button";

//Class Component
const ListItem =({label, toDeleteItem, onToggleDone, onToggleImportant, done, important}) =>{

        let classes = "list-item";
        if (done) {
            classes += " line";
        }
        if (important) {
            classes += " important";
        }

        const edit=[
        {id:"01", name: "important", path: "img/svg/warning.svg", function: onToggleImportant},
        {id:"02", name: "bin",path: "img/svg/bin.svg", function: toDeleteItem}
    ];
    const buttons = edit.map( (el)=> <Button key={el.id} id={el.name} path={el.path} function={el.function}/> )   ;

        return (
            <div className={classes}>
                    <span onClick={onToggleDone}>
            {label}
                    </span>
                <div className="list-item--button">
                    {buttons}
                </div>
            </div>
        );
}

export default ListItem;

//Functional Component
// const ListItemFunc = ({ label, important = false }) =>{
//     const style = {
//         color: important? 'tomato' : 'black'
//     }       ;
//     const edit=[
//         {name: "important", path: "img/svg/warning.svg" }    ,
//         {name: "bin",path: "img/svg/bin.svg"}
//
//     ];
//     const buttons = edit.map( (el)=> <Button id={el.name} path={el.path}/> )   ;
//     return (
//         <div className="list-item">
//             <span style={style}
//                   >
//             {label}
//         </span>
//             <div className="list-item--button">
//                 {buttons}
//             </div>
//         </div>
//
//     );
// }

//Class Component
// export default class ListItem extends Component {
//
//     state = {
//         done: false,
//         important: false
//     };
//
//
//     toCrossOutText = () => {
//         this.setState ( ({done}) => {
//             return{
//                 done: !done
//             };
//         });
//         console.log(`Click : ${this.props.label}`);
//     };
//
//     toDoLineImportant = () => {
//         this.setState(({important})=>{
//             return {
//                 important: !important
//             }
//         });
//     };
//
//     render() {
//
//         const {label, toDeleteItem, onToggleDone, onToggleImportant} = this.props;
//         const {done, important} = this.state;
//         let classes = "list-item";
//         if (done) {
//             classes += " line";
//         }
//         if (important) {
//             classes += " important";
//         }
//
//         const edit=[
//             {id:"01", name: "important", path: "img/svg/warning.svg", function: onToggleImportant},
//             {id:"02", name: "bin",path: "img/svg/bin.svg", function: toDeleteItem}
//         ];
//         const buttons = edit.map( (el)=> <Button key={el.id} id={el.name} path={el.path} function={el.function}/> )   ;
//
//         return (
//             <div className={classes}>
//                     <span onClick={onToggleDone}>
//             {label}
//                     </span>
//                 <div className="list-item--button">
//                     {buttons}
//                 </div>
//             </div>
//
//         );
//     }
// }
