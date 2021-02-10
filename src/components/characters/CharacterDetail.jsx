import React, { Component } from 'react'
import { getCharacterById } from '../../services/getCharacterById';
import Character from '../characters/Character';

export default class CharacterDetail extends Component {

    state = {
        character: {}
    };

    componentDidMount() {
        getCharacterById(props.match.params.id)
            .then(character => this.setState({ character }))
    }


    render() {
        console.log(this.state.character)
        return (
            <div>
                <h1>I'M HERE</h1>
               <Character character={this.state.character}/> 
            </div>
        )
    }
}
