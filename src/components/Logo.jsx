
import React from 'react';


const Logo = ({className}) =>{
    const urlLogo= 'https://static.tumblr.com/b0cc73a0dcc041d0b6bec39ff7a4589b/a7gi927/NJ6pt1yrb/tumblr_static_blh6ymvqzb40k0k0ck8csg0so.png';
    return(
        <a href='https://numbana.tumblr.com/' className={className}>
            <img src={urlLogo} alt='Logo de NUMBANA'  className=''/>
        </a>
    )
}

export {Logo};