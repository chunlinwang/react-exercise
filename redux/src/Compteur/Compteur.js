import React, { Component } from 'react'
import './Compteur.css';
import Resultat from '../Composants/Resultat/Resultat.js';
import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';
import { connect } from 'react-redux'
import {INCREMENT, DECREMENT} from '../Store/actionType' 

class Compteur extends Component {

    state = {
        compteur : 0
    }

    render() {
        console.log(this.props);
        return (
            <div className="cont">
            <div className="blocConmpt">
                <Resultat valeur={this.props.ctr} />
            </div>
            <div className="contBtn">
                <IncrBtn txt="Incremente" clicked={this.props.inc} />
                <IncrBtn txt="Decremente" clicked={this.props.dec} />
            </div>
        </div>
        )
    }
}


const mapStateToProps = state => ({
    ctr: state.compteur
})

const mapDispatchToProps = dispatch => ({
        inc: () => dispatch({type: INCREMENT}),
        dec: () => dispatch({type: DECREMENT}),
    });

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);

