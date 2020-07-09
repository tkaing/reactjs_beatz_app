import React from 'react';
import './SearchBar.css';
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import App from "../App";
import {Button} from "react-bootstrap";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SearchBar">
                <MuiThemeProvider theme={App.customTheme()}>
                    <TextField
                        id="outlined-basic" label="Trouve ton album" variant="outlined"
                        className={"SearchBar-text-field"}
                    />
                    <Button
                        variant={"default"}
                        className={"SearchBar-button Background-primary Color-white"}
                        size={"lg"}
                    >
                        <SearchIcon />
                    </Button>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default SearchBar;