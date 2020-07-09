import React from 'react';
import './Favorite.css';

import SearchBar from "../components/SearchBar";

class Favorite extends React.Component {

    static path = '/';

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={"Favorite"}>
                <SearchBar />
            </div>
        )
    }
}

export default Favorite;