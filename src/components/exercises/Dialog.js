import React, { Component, Fragment } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';

export default class extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {

    const { open } = this.state,
          { muscles, onCreate } = this.props
    
    return (
      <Fragment>
      <Fab mini aria-label="add" size="small" onClick={this.handleToggle}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={this.handleToggle}>
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please fill out the form below.
          </DialogContentText>
          <Form
            muscles={muscles}
            onSubmit={onCreate}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
    )
  }
}
   