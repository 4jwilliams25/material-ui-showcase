import React, { Component } from 'react'
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core'

const styles = theme => ({
    FormControl: {
      width: 300
    }
  })

export default withStyles(styles)(class extends Component {
    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props

        return exercise ? exercise: {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = name => ({ target: { value } }) =>
        this.setState({
            [name]: value
        })
    
      handleSubmit = () => {
    
        const { exercise } = this.state
    
        this.props.onCreate({
          ...exercise,
          id: exercise.title.toLocaleLowerCase().replace('/  /g, '-'')
        })
    
        this.setState({
          open: false,
          exercise: {
            title: '',
            description: '',
            muscles: ''
          }
        })
    
      }

    render() {
        const { title, description, muscles } = this.state,
            { classes, muscles: categories } = this.props

        return(
            <form>
                <TextField
                    label='Title' 
                    value={title}
                    onChange={this.handleChange('title')}
                    margin='normal'
                    className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                    <InputLabel htmlFor='muscles'>Muscles</InputLabel>
                    <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                    >
                    {categories.map((category, i) => 
                        <MenuItem key={i} value={category}>{category}</MenuItem>
                    )}
                    </Select>
                </FormControl>
                {/* br puts the element on a new line */}
                <br />
                <TextField
                    multiline
                    rows='4'
                    label='Description' 
                    value={description}
                    onChange={this.handleChange('description')}
                    margin='normal'
                    className={classes.FormControl}
                />
                <br />
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleSubmit}
                >
                Create
                </Button>
          </form>
        )
    }
})