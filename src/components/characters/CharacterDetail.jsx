import React, { Component } from 'react'
import { getCharacterById } from '../../services/getCharacterById';


export default class CharacterDetail extends Component {

    start = {
        character: {}
    };

    componentDidMount() {
        getCharacterById()
            .then(character => this.setState({ }))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
