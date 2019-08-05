import React, { Component } from 'react'

class Establishment extends Component {

    constructor(props) {

        super(props);
        // On initialise nos deux variables
        this.state = {
            isLiked     : false,
            isDisliked  : false,
            likeCounter     : 0,
            dislikeCounter  : 0
        }

    }

    // fonction appelée lors du clic sur l'élément "like"
    like = () =>{

        // On met à jour le compteur à chaque clic sur le composant "like"
        let likeCounter     = this.state.likeCounter;
        let dislikeCounter  = this.state.dislikeCounter;

        likeCounter  +=  1
        dislikeCounter +=  this.state.dislikeCounter > 0 ? -1 : 0
    
        this.setState({
            isLiked         : !this.state.isLiked,
            isDisliked      : this.state.isDisliked ? !this.state.isDisliked : this.state.isDisliked,
            likeCounter     : likeCounter,
            dislikeCounter  : dislikeCounter
        })
    }

    // fonction appelée lors du clic sur l'élément "dislike"
    dislike = () =>{

        // On met à jour le compteur à chaque clic sur le composant "dislike"
        let likeCounter     = this.state.likeCounter;
        let dislikeCounter  = this.state.dislikeCounter;
    
        dislikeCounter  +=  1
        likeCounter     +=  this.state.likeCounter > 0 ? -1 : 0
    
        this.setState({
            isDisliked      : !this.state.isDisliked,
            isLiked         : this.state.isLiked ? !this.state.isLiked : this.state.isLiked,
            likeCounter     : likeCounter,
            dislikeCounter  : dislikeCounter
        })
    }

    render() {

        // On définit les éléments "upIcon(like) et downIcon(dislike)"
        // on utilise ici Font-Answome (on inclura le fichier css dans ./public.index.html)
        let upIcon      = <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        let downIcon    = <i className="fa fa-thumbs-down" aria-hidden="true"></i>

        // Si l'on n'a pas encore "liké"
        if(!this.state.isLiked){
            upIcon = <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        }
        // Si l'on a pas encore "disliké"
        if(!this.state.isDisliked){
            downIcon = <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
        }

        return (
            <div className='establishment' >
                <div className='establishment-description' >
                    <h3>{ this.props.establishment.name }</h3>
    
                    { this.props.establishment.description }
                </div>
                <div className='establishmentLikeDislike' >
                    {/* On affiche les compteurs */}
                    <button onClick={this.like}>{ upIcon } </button> <span>{ this.state.likeCounter }</span>
                    <button onClick={this.dislike}>{ downIcon }</button> <span>{ this.state.dislikeCounter }</span>
                </div>
    
            </div>
        );
    }
}

export default Establishment;