import React, {Component} from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.error) {
            return (<h1>Thats not good</h1>)
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundry;