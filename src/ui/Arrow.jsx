import React from 'react'
// import ReactFullpage from '@fullpage/react-fullpage';

export function Arrow({fullpageApi, direction = 'down'}) {
    console.log(direction);
    const handleClick = function() {
        console.log(direction);
        if (direction === 'down') {
            fullpageApi.moveSectionDown()
        } else if (direction === 'up') {
            fullpageApi.moveSectionUp()
        }
        // } else if (direction === '90deg') {
        //     fullpage_api.moveSlideRight();
        // } else {
        //     fullpage_api.moveSlideLeft();
        // }
    }

    return (
        <div className="arrow" onClick={handleClick}>
            <span className="arrow__icon" />
        </div>
    )
}