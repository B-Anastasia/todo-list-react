import React,{Component} from 'react';
import Button from "../../../Button/button";

export default class PanelButtons extends Component {

    render(){

        const add=[
            {name: "list", path: "img/svg/list2.svg" }    ,
            {name: "active",path: "img/svg/checkmark2.svg"},
            {name: "done",path: "img/svg/checkmark.svg" }

        ];

        const buttons = add.map( (el) => <Button key={el.name} path={el.path}/> );
        return (
            <div>
                {buttons}
            </div>
        );
    }
}