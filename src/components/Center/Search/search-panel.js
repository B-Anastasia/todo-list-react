import React from 'react';
import PanelButtons from "./PanelButtons/panel-buttons";
import SearchInput from "./Input/search-input";
import './search-panel.scss';

const SearchPanel = () => {
    const search = 'Type here to search';

    return (
        <div className="search-panel">
            <SearchInput type="text" placeholder={search}/>
           <PanelButtons />
        </div>


    );
}

export default SearchPanel;