import React, { Component } from 'react';

class MessagesComponent extends Component {

    render () {
        return (
            <div className={`alert alert-${this.props.type}`} role='alert'>
                {this.props.message}
            </div>
        )
    }
}

MessagesComponent.defaultProps = {
    type: 'info'
}

export default MessagesComponent;