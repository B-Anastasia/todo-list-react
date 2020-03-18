import React, {Component} from 'react';
import './add-new.scss';
import SearchInput from "../Center/Search/Input/search-input";
import Button from "../Button/button";


export default class AddNew extends Component {

    state = {
        label: ''                   //empty line
    };

    onLabelChange = (e) =>{
        this.setState({
           label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
      this.props.toAddItem(this.state.label);
      this.setState({
          label: ''
      });
    };


    render(){
        return (
         <form className="new" onSubmit={this.onSubmit}>
             <SearchInput value={this.state.label} type="text" placeholder="Enter new TODO item" function={this.onLabelChange}/>
             <Button path="img/svg/add.svg" className='button'/>
         </form>
    );
    }
}

// const AddNew = ({toAddItem}) =>{
//     return (
//          <div className="new">
//              <SearchInput type="text" placeholder="Enter new TODO item" size="30"/>
//              <Button path="img/svg/add.svg" function={()=>toAddItem("Hello")}/>
//          </div>
//     )   ;
// }
//
// export default AddNew;