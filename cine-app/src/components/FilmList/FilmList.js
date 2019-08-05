import React, {Component} from 'react';
import FilmElement from './../FilmDetail/FilmElement'


export default class FilmList extends Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                    <FilmElement movie={this.props.movie[0]} updateSelected={ this.props.updateSelected}/>
                    <FilmElement movie={this.props.movie[1]} updateSelected={ this.props.updateSelected}/>
                    <FilmElement movie={this.props.movie[2]} updateSelected={ this.props.updateSelected}/>
                    <FilmElement movie={this.props.movie[3]} updateSelected={ this.props.updateSelected}/>
            </div>
            );
        }
    }