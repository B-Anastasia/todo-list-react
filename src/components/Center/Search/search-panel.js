import React, { Component } from 'react';
import PanelButtons from "./PanelButtons/panel-buttons";
import SearchInput from "./Input/search-input";
import './search-panel.scss';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };


    render(){
        const search = 'Type here to search';

        return (
            <div className="search-panel">
                <SearchInput type="text" value={this.state.term} placeholder={search} function={this.onSearchChange}/>
                <PanelButtons filter={this.props.filter} onFilterChange={this.props.onFilterChange}/>
            </div>
        );
    }
}

// const SearchPanel = ({activeItems, allItems, doneItems, onSearchChange}) => {
//     const search = 'Type here to search';
//     return (
//         <div className="search-panel">
//             <SearchInput type="text" placeholder={search} function={onSearchChange}/>
//            <PanelButtons
//                doneItems={doneItems}
//                allItems={allItems}
//                activeItems={activeItems}
//            />
//         </div>
//     );
// }
// export default SearchPanel;