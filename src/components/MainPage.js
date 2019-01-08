import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './MainPage.css';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header'


class MainPage extends Component {

    componentWillMount() {
        this.props.onRequestRobots();
    }

    filterRobots = (robots, searchfield) => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    };

    render() {

        const {searchfield, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = this.filterRobots(robots, searchfield);

        return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;