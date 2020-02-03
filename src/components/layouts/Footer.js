import React, { Component } from 'react'
import { withWidth, Tabs, AppBar, Tab } from '@material-ui/core'
import { withContext } from '../../context'

class Footer extends Component {
    onIndexSelect = (e, index) => {
        const { onCategorySelect, muscles } = this.props 
        onCategorySelect(index === 0 ? '' : muscles[index - 1])
    }

    getIndex = () => {
        const { category, muscles } = this.props
         return category
            ? muscles.findIndex(group => group === category) + 1
            : 0
    }

    render() {
        const { width, muscles } = this.props
        return (
            <AppBar position='static'>
                <Tabs
                // Value picks the active tab; 0 indexed
                value={this.getIndex}
                onChange={this.onIndexSelect}
                indicatorColor="secondary"
                textColor="secondary"
                centered
                scrollButtons="auto"
                >   
                    <Tab label="All" />
                    {muscles.map(group => 
                        <Tab key={group} label={group} />
                    )}
                </Tabs>
            </AppBar>
            )
    }
}

export default withContext(withWidth()(Footer))