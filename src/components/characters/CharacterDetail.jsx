import React, { Component } from 'react'
import { getCharacterById } from '../../services/getCharacterById';
import Character from '../characters/Character';

export default class CharacterDetail extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        getCharacterById(this.props.match.params.id)
            .then(character => this.setState({ character }))
    }


    render() {
        const { character } = this.state;

        return (
            <>
                <Character {...character}/> 
            </>
        );
    }
}
