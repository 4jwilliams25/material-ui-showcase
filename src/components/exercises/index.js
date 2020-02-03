import React, { Fragment } from 'react'
import { 
    Grid, 
    Paper, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemSecondaryAction,
    IconButton,
    withStyles
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withContext } from '../../context';
import Form from './Form';

const styles = theme => ({
    paper: { 
        padding: 20,
        marginTop: 5,  
        height: 'calc(100% - 10px)', 
        overflowY: 'auto'  
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        },
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
    }
})

const Exercises = 
    ({
    classes,
    muscles,
    exercisesByMuscles,
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
(
    <Grid container className={classes.container}>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                {exercisesByMuscles.map(([group, exercises]) => 
                    !category || category === group
                        ? 
                        <Fragment key={group}>
                            <Typography
                                variant="h5"
                                color="secondary"
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
                                                <IconButton color='primary' onClick={() => onSelectEdit(id)}>
                                                        <EditIcon />
                                                </IconButton>
                                                <IconButton color='primary' onClick={() => onDelete(id)}>
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
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography
                    variant="h4"
                    color='secondary'
                    gutterBottom
                    >
                    {title}
                </Typography>
                {editMode 
                ? <Form
                    key={id}
                    exercise={exercise}
                    muscles={muscles}
                    onSubmit={onEdit}
                />
                : 
                    <Typography
                        variant="subheading"
                    >
                        {description}
                    </Typography>
                }
            </Paper>
        </Grid>
    </Grid>
)

export default withContext(withStyles(styles)(Exercises))