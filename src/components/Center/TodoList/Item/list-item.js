import React, {Component} from 'react';
import './list-item.scss';
import Button from "../../../Button/button";

//Class Component
export default class ListItem extends Component {

    state = {
        done:false
    };

    toCrossOutText = () => {
        if (this.state.done){
            this.setState({
                done:false
            });
        } else {
            this.setState({
                done:true
            });
        }

        console.log(`Click : ${this.props.label}`);

    }



    render() {

        const {label, important = false} = this.props;
        const {done} = this.state;
        let classes = "list-item";
        if(done){
            console.log(classes);
            classes += " line";
        }
        const style = {
            color: important ? 'tomato' : 'black'
        };
        const edit = [
            {name: "important", path: "img/svg/warning.svg"},
            {name: "bin", path: "img/svg/bin.svg"}

        ];
        const buttons = edit.map((el) => <Button id={el.name} path={el.path}/>);
        return (
            <div className={classes}>
                    <span style={style} onClick={this.toCrossOutText}>
            {label}
                    </span>
                <div className="list-item--button">
                    {buttons}
                </div>
            </div>

        );
    }
}

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
