import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, history, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/resources">
          <h2 className="text-danger">
            HackDSC App
          </h2>
        </RouterLink>
        <div className={classes.flexGrow} />
        <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => window.location.href='/account'}
          >
            <AccountIcon />
          </IconButton>

        <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => window.location.href='/settings'}
          >
            <SettingsIcon />
          </IconButton>

          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={() => window.location.href='/'}
          >
            <InputIcon />
          </IconButton>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
