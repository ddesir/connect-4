import React, { Component } from 'react';
import Dialogs from './Dialogs';

class Login extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.setState({isOpen: true})}>Login</button>
                <Dialogs isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                    I'm a dragon
            </Dialogs>
            </div>
        )
    }
}

export default Login;