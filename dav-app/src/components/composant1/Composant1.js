// import React from 'react';

// export default(props) => {
//     const propsStyle = {
//         color: props.color ? props.color : 'red',
//         backgroundColor: 'black'
//     }

//     if (props.user.logged) {
//         propsStyle.color = "white";
//     }

//     return(
//         <div>
//             <h1 style={ propsStyle } >Composant1 Title</h1>
//         </div>
//     );
// }
// 
import React from 'react';
import Style from '../composant1/Composant1.module.scss';
import Article from '../article/Article';



export default() => {
    return(
        <div className={ Style.container }>
            <h1>Composant1 Title</h1>
            <Article/>
        </div>
    );
}