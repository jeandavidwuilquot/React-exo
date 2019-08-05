import React, {Component} from 'react';

export default class FilmDetail extends Component{
    render(){
        return (
            <div className="w-25 border p-4 d-flex flex-column">
                <h5> { this.props.movie.titre } </h5>
                <hr className="w-100"/>
                <img className="d-block mx-auto w-75" src={ this.props.movie.img } alt=""/>
                <hr className="w-100"/>
                <span className="text-secondary"> { this.props.movie.details } </span>
                <hr className="w-100"/>
                <p className=""> { this.props.movie.description } </p>
            </div>
        );
    }
}

