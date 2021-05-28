import React from 'react'
import loaderImg from './loader.gif'
import './loader.css'

export default function Loader() {
    return (
        <div className="loader-container">
            <h2>Finding your Movies...</h2>
            <div className="loader">
                <img src={loaderImg} alt="loading"/>
            </div>
        </div>
    )
}
