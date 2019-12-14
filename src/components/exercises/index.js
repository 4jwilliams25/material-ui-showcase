import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles ={
    Paper: { padding: 20,
             marginTop: 10, 
             marginBottom: 10, 
             height: 500, 
             overflowY: 'auto'  
    }
}

export default ({exercises, category, onSelect, exercise }) => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    !category || category === group
                        ? 
                        <Fragment>
                            <Typography
                                variant="h5"
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ul" aria-label="secondary mailbox folders">
                                {exercises.map(({ id, title }) => 
                                    <ListItem button>
                                            <ListItemText 
                                                primary={title} 
                                                onClick={() => onSelect(id)}
                                            />
                                    </ListItem>    
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="h4"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                    style={{marginTop: 20}}
                >
                    Please select an exercise from the list on the left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>