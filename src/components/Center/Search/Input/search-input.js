import React from 'react';
import './search-input.scss';

const SearchInput = (props) => {
    return (
        <div className="search-input">
            <input
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.function}/>
        </div>
    );
}

export default SearchInput;