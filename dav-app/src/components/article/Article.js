import React, {Component} from 'react';


class Article extends Component {
    constructor(props){
        super(props);
        this.state={
            display: false
        }
    }

    render(){
        return(
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5">Articles</h1>
                <div className="card w-75">
                    <div className="card-header">Guy Vilain</div>
                    <div className="card-body">
                        <div className="card-title">King Of react</div>
                        <div className="card-text">
                            This noble Coder explore for you the deepest side of React and give you him best tips for you learning road.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in tortor vestibulum, gravida ligula non, aliquet quam. Donec cursus odio et pulvinar dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed at neque euismod, imperdiet nisl eget, tincidunt mauris. Aenean aliquet mi mi, vel placerat magna venenatis at. In ac volutpat nisi. Integer non aliquam orci, quis hendrerit tortor. Praesent hendrerit, nisi id gravida posuere, nisl nulla aliquet dolor, quis congue justo lectus ut sem.
                            Suspendisse et augue odio. Sed mollis ante quis cursus pulvinar. Morbi tristique tincidunt augue, nec molestie magna suscipit eget. Aliquam cursus, diam in molestie posuere, ante odio tincidunt tortor, rhoncus vestibulum velit sem quis quam. Quisque convallis magna eu faucibus bibendum. Praesent nunc justo, tincidunt vel diam vestibulum, eleifend aliquet dui. Fusce dictum nulla id nunc aliquet, quis aliquet nisi consectetur. Nam viverra eleifend sapien, et fermentum justo lobortis sit amet. Vivamus gravida iaculis pulvinar.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Article;