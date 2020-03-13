import React from 'react';
import './add-new.scss';
import SearchInput from "../Center/Search/Input/search-input";
import Button from "../Button/button";

const AddNew = ({toAddItem}) =>{
    return (
         <div className="new">
             <SearchInput type="text" placeholder="Enter new TODO item" size="30"/>
             <Button path="img/svg/add.svg" function={()=>toAddItem("Hello")}/>
         </div>
    )   ;
}

export default AddNew;