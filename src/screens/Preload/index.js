import React, { useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';
import BarberLogo from '../../assets/barber.png';
import { Container, BarberImg, LoadingIcon } from './styles';


export default () => {
    const { dispatch: UserDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                let res = await api.ckeckToken(token);
                if (res.token) {
                    await AsyncStorage.setItem('token', res.token);

                    UserDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    navigation.navigate('SignIn');
                }

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