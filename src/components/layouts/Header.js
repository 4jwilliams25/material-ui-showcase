import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

const styles = {
  flex: {
    flex: 1,
    marginLeft: 20,
  }
}

export default withStyles(styles)(({ classes }) => 
    <AppBar position="static">
        <Toolbar>
          {/* The flex of 1 pushes everything else to the far left */}
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Exercise Database
          </Typography>

          <CreateDialog />
        </Toolbar>
    </AppBar>
)