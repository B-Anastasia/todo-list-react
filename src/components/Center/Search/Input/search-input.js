import React from 'react';
import './search-input.scss';

const SearchInput = (props) => {
    return (
        <div className="search-input">
            <input type={props.type} placeholder={props.placeholder} size={props.size}/>
        </div>
    );
}

export default SearchInput;