import React, {Component} from 'react';

import Secret from '../components/Secret';

class Game extends Component {
    render() {
        return (
            <div className="haml">
                <Secret>
                </Secret>
            </div>
        );
    }
}

export default Game;