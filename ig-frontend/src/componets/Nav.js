import React from 'react';
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        marginRight: theme.spacing(2),
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className="Nav">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/" exact>Home</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/create" exact>Create</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
