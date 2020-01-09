import React, { Fragment } from 'react'
import { 
    Grid, 
    Paper, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Form from './Form';

const styles ={
    Paper: { padding: 20,
             marginTop: 10, 
             marginBottom: 10, 
             height: 500, 
             overflowY: 'auto'  
    }
}

export default ({
    muscles,
    exercises,
    category, 
    editMode,
    onSelect,
    exercise, 
    exercise: {
        id, 
        title = 'Welcome!', 
        description = 'Please select an exercise from the list on the left.',

    }, 
    onDelete,
    onSelectEdit,
    onEdit
}) => 
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    !category || category === group
                        ? 
                        <Fragment key={group}>
                            <Typography
                                variant="h5"
                                style={{textTransform: 'capitalize'}}
                            >
                                {group}
                            </Typography>
                            <List component="ul" aria-label="secondary mailbox folders">
                                {exercises.map(({ id, title }) => 
                                    <ListItem 
                                        key={id}
                                        button 
                                        onClick={() => onSelect(id)}
                                    >
                                            <ListItemText 
                                                primary={title} 
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton onClick={() => onSelectEdit(id)}>
                                                        <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => onDelete(id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>   
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
                {editMode 
                ? <Form
                    exercise={exercise}
                    muscles={muscles}
                    onCreate={onEdit}
                />
                : <Fragment>
                    <Typography
                    variant="h4"
                    >
                    {title}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop: 20}}
                    >
                        {description}
                    </Typography>
                </Fragment>}
                
            </Paper>
        </Grid>
    </Grid>