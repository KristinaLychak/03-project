import React from "react";
import preloder from '../../../assets/images/preloading.gif';


let Preloader =(props) => {
    return <div style={{backroundcolor: 'white'}}>
        {<img src = {preloder}/>}
    </div>
}

export default Preloader;