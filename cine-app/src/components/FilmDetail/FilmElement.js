
import React, {Component} from 'react';

export default class FilmElement extends Component{

    mouseEnter = () => {
        this.props.updateSelected( this.props.movie.titre );
    }

    render(){
        return (
            <div onMouseEnter={ this.mouseEnter } className="w-50 p-2">
                <div className="border d-flex">
                    <img width='180px' height='250px' alt="film" src={ this.props.movie.img } />
                    <div className="flex-fill d-flex flex-column p-3">
                        <h5> { this.props.movie.titre } </h5>
                        <hr className="w-100" />
                        <p> { this.props.movie.details } </p>
                    </div>
                </div>
            </div>
        );
    }
}