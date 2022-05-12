import React from "react";
import preloder from '../../../assets/images/preloading.gif';


let Preloader =(props) => {
    return <div style={{backgroundColor: 'white'}}>
        {<img src = {preloder}/>}
    </div>
}

export default Preloader;