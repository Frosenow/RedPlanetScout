import React from 'react';

export default function Card({photo}){
    return (
            <div className="card" id={photo.id}>
                <img className="card-image" src={photo.img_src}></img>
                <div className="card-description">
                    <ul>
                        <li className="card-title">Rover Name: {`${photo.rover.name}`}</li>
                        <li>Earth Date: {`${photo.earth_date}`}</li>
                        <li>Camera Name: {`${photo.camera.name} - ${photo.camera.full_name}`}</li>
                        <li>Sol: {`${photo.sol}`}</li>
                    </ul>
                </div>
            </div>
    )
}