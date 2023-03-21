import React from 'react';

export default function Card({photo}){
    return (
            <div className="card" id={photo.id}>
                <img className="card-image" src={photo.img_src}></img>
                <div className="card-description">
                    <ul>
                        <li className="card-title">Rover Name: {`${photo.rover.name}`}</li>
                        <li>&#127758;Earth Date: {`${photo.earth_date}`}</li>
                        <li>&#127909;Camera Name: {`${photo.camera.name} - ${photo.camera.full_name}`}</li>
                        <li>&#128197;Sol: {`${photo.sol}`}</li>
                    </ul>
                </div>
            </div>
    )
}