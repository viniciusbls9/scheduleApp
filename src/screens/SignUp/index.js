import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.png';
import PersonIcon from '../../assets/person.png';
import EmailIcon from '../../assets/email.png';
import LockIcon from '../../assets/lock.png';

import SignInput from '../../components/SignInput';
import api from '../../services/api';

import {
    Container,
    BarberImg,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    MsgError,
} from './styles'

export default () => {
    const { dispatch: UserDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await api.signUp(nameField, emailField, passwordField);

            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                UserDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                })

            } else {
                setMessageError(res.error);
            }
        } else {
            alert('preencha os campos');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    return (
        <Container>
            <BarberImg source={BarberLogo} resizeMode="contain" />

            <InputArea>

                <SignInput
                    IconPng={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />

                <SignInput
                    IconPng={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />


                <SignInput
                    IconPng={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
                <MsgError>{messageError}</MsgError>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}