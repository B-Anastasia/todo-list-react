import React from 'react';
import Button from "../../Button/button";
import './search-panel.scss';
import SearchInput from "./Input/search-input";

const SearchPanel = () => {
    const search = 'Type here to search';
    const add=[
        {name: "list", path: "img/svg/list2.svg" }    ,
        {name: "active",path: "img/svg/checkmark2.svg"},
        {name: "done",path: "img/svg/checkmark.svg" }

    ]

    const buttons = add.map( (el) => <Button key={el.name} path={el.path}/> )
    return (
        <div className="search-panel">
            <SearchInput type="text" placeholder={search}/>
            <div className="search-panel__buttons">
            {buttons}
            </div>
        </div>


    );
}

export default SearchPanel;