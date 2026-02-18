import React,{Component} from 'react';
import Button from "../../../Button/button";
import './panel-buttons.scss';

export default class PanelButtons extends Component {

    buttons=[
        {name: "all", path: "img/svg/list2.svg"},
        {name: "active", path: "img/svg/checkmark2.svg"},
        {name: "done", path: "img/svg/checkmark.svg"}

    ];

    render(){
        const {filter, onFilterChange, className} = this.props;

        const buttons = this.buttons.map( (el) => {
            const isActive = filter === el.name;
            const clazz = isActive? 'button active':'button';
            return (<Button key={el.name} className={clazz} path={el.path} function={ ()=>onFilterChange(el.name) }/>);
        });
        return (
            <div className={className}>
                {buttons}
            </div>
        );
    }
}