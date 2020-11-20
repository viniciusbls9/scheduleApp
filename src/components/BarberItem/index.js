import React from 'react';

import Stars from '../Stars';
import {
    Area,
    Avatar,
    InfoArea,
    Username,
    SeeProfileButton,
    SeeProfileButtonText,
} from './styles';

export default ({ data }) => {
    return (
        <Area>
            <>
                <Avatar source={{ uri: data.avatar }} />

                <InfoArea>
                    <Username>{data.name}</Username>

                    <Stars stars={data.stars} showNumber={true} />

                    <SeeProfileButton>
                        <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                    </SeeProfileButton>
                </InfoArea>
            </>
        </Area>
    );
}