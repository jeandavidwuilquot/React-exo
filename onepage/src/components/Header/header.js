import React, { Component, Fragment } from 'react';

export default class Header extends Component {

    render() {
        return (
            <Fragment>
            <section id="header">
            <div class="inner">
                <span class="icon solid major fa-cloud"></span>
                <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
                little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                <ul class="actions special">
                    <li><a href="/" class="button scrolly">Discover</a></li>
                </ul>
            </div>
            </section>
            </Fragment>
        );
    }

}