import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

const styles = {
  x: {
    flex: 1
  }
}

export default withStyles(styles)(({ classes, muscles, onExerciseCreate }) => 
    <AppBar position="static">
        <Toolbar>
          {/* The flex of 1 pushes everything else to the far left */}
          <Typography variant="headline" color="inherit" className={classes.x}>
            Exercise Database
          </Typography>

          <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
        </Toolbar>
    </AppBar>
)