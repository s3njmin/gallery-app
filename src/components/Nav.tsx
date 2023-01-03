import '../styles/NavStyling.css';
import { useState } from 'react';

export default function Nav(props: any) {
    
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
                <button className="nav-white" onClick={props.openUpload}>
                    upload
                </button>
            </span>
        </div>
    )
}