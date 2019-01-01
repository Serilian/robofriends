import React, {PureComponent} from 'react';

class CounterButton extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState((state) => {
             return {count: state.count + 1}
        })
    };

    render() {
        console.log('Counter button');
        return (
            <>
                <button color={this.props.color} onClick={this.updateCount}>Click Me! {this.state.count}</button>
            </>
        );
    }
}

export default CounterButton;