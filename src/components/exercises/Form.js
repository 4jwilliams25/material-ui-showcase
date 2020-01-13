import React, { Component } from 'react'
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

export default class extends Component {
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
    
        this.props.onSubmit({
            id: this.state.title.toLocaleLowerCase().replace('/  /g, '-''),
            ...this.state
        })
      }

    render() {
        const { title, description, muscles } = this.state,
            { exercise, muscles: categories } = this.props

        return(
            <form>
                <TextField
                    label='Title' 
                    value={title}
                    onChange={this.handleChange('title')}
                    margin='normal'
                    fullWidth
                />
                <br />
                <FormControl fullWidth>
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
                    fullWidth
                />
                <br />
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={this.handleSubmit}
                    disabled={!title || !muscles}
                >
                    {exercise ? 'Edit' : 'Create'}
                </Button>
          </form>
        )
    }
}