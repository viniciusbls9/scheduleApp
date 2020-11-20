import React from 'react';

import starfull from '../../assets/star.png';
import starhalf from '../../assets/star_half.png';
import starempty from '../../assets/star_empty.png';

import {
    StarArea,
    StarView,
    StarIcon,
    StarText,
} from './styles';

export default ({ stars, showNumber }) => {
    let s = [0, 0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for (var i = 0; i < floor; i++) {
        s[i] = 2;
    }
    if(left > 0) {
        s[i] = 1;
    }

    return (
        <StarArea>
            {s.map((i, k) => (
                <StarView key={k}>
                    {i === 0 && <StarIcon source={starempty} />}
                    {i === 1 && <StarIcon source={starhalf} />}
                    {i === 2 && <StarIcon source={starfull} />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}