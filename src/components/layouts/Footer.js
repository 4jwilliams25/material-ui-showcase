import React from 'react'
import { Tabs, AppBar } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'

export default ({ muscles, category, onSelect }) =>  {
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1])
        }

    return (
        <AppBar position='static'>
            <Tabs
            // Value picks the active tab; 0 indexed
            value={index}
            onChange={onIndexSelect}
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
    )}