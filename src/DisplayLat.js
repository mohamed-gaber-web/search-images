import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month > 9) { // 3 - 8
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export const DisplayLat = (props) => {
    const Month = new Date().getMonth(); // month name
    console.log(Month);

    const Seasons = getSeason(props.lat, Month); // summer or winter
    const TypeOfSeasons = Seasons === 'winter' ? 'this is winter' : 'this is summer';
    console.log(Seasons);
    return (
        <div>
            <h1> Latitude : {props.lat} With Props And State</h1>
            {/* <h2> {Seasons === 'winter' ? 'this is winter ' : 'this is summer'} </h2> */}
            <h2 style={{ textTransform: 'uppercase' }}> {TypeOfSeasons}  </h2>
        </div>
    );
}