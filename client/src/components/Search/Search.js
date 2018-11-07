import React from "react";
import "./Search.css";

const Search = props => (
    <div className="input-group input-group-lg">
        <input className="form-control" type="text" {...props} />
    </div>
);

export default Search;