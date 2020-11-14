import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.png';
import { Container, BarberImg, LoadingIcon } from './styles';


export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async() => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null) {
                // validar o token
            } else {
                navigation.navigate('SignIn');
            }
        }

        checkToken();

    }, []);

    return (
        <Container>
            <BarberImg source={BarberLogo} resizeMode="contain" />
            <LoadingIcon size="large" color="#ffffff" />
        </Container>
    );
}