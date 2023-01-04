import '../styles/NavStyling.css';
import { useState } from 'react';
import React from 'react';


export default function Nav(props: any) {
    const hiddenFileInput = React.useRef(null);

    return (
        <div className="nav">
            <span className="left-nav">
                <button className="nav-white">
                    stories
                </button>
                <button className="nav-black">
                    engagement
                </button>
            </span>

            <span className="right-nav">
                <button className="nav-black">
                    about
                </button>
                <div>
                    <form className="nav-white" onSubmit={props.formSubmit()}>
                        <input className='file-input' type="file" onChange={(e)=> props.convertFile(e.target.files)} />
                        upload
                    </form>
                </div>
            </span>
        </div>
    )
}