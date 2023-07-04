import React, { useEffect, useState } from 'react';
import { useInjection } from 'inversify-react';
import TYPES from '../di/types';
import { observer } from 'mobx-react-lite';
import IMarsRoverService from '../di/interfaces/IMarsRoverService';

const roverOneStartingPos = '1,2,N';
const roverTwoStartingPos = '2,3,E';

const roverOneInstructions = 'LMLMLMLMM';
const roverTwoInstructions = 'MMRMMRMRRM';

const MarsRover = observer(() => {
    const marsRoverService = useInjection<IMarsRoverService>(TYPES.MarsRoverService);

    const [roverOne, setRoverOne] = useState('');
    const [roverTwo, setRoverTwo] = useState('');

    useEffect(() => {
        const res1 = marsRoverService.getPosition(roverOneStartingPos, roverOneInstructions);
        const res2 = marsRoverService.getPosition(roverTwoStartingPos, roverTwoInstructions);

        setRoverOne(res1);
        setRoverTwo(res2);
    }, []);

    return (
        <>
            <h1>Mars rover final positions</h1>

            <p>Rover one: {roverOne}</p>
            <p>Rover two: {roverTwo}</p>
        </>
    );
});

export default MarsRover;
