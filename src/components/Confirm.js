import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // proccess the data
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props

        return (
            <MuiThemeProvider>
                <>
                    <AppBar title="Confirm User Data"></AppBar>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Biography"
                            secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        secondary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                </>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default Confirm
