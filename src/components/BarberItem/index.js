import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Barber', {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            stars: data.stars
        });
    }
    
    return (
        <Area onPress={handleClick} underlayColor="#3a3a3a">
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