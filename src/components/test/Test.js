import React, {Component} from 'react';
import posed from 'react-pose';
import './Test.css';

const Box = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    transition: {
        type: 'spring', stiffness: 100
    }
});

class Test extends Component {
    state = { isVisible: true };

    componentDidMount() {
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }

    render() {
        return (
            <Box className="box"
                 pose={this.state.isVisible ? 'visible' : 'hidden'}
            />
        );
    }
}

export default Test;
