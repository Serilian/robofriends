import React, {Component} from 'react';
import './Header.css';
import CounterButton from  './CounterButton';

class Header extends Component {


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return (
            <>
            <h1 className='f1 header'>RoboFriends</h1>
            <CounterButton color="red"/>
            </>
                )
    }
}

export default Header;