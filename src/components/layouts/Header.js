import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

export default ({ muscles, onExerciseCreate }) => 
    <AppBar position="static">
        <Toolbar>
          {/* The flex of 1 pushes everything else to the far left */}
          <Typography variant="headline" color="inherit" style={{flex: 1}}>
            Exercise Database
          </Typography>

          <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
        </Toolbar>
    </AppBar>