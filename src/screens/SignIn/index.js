import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.png';
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

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let res = await api.signIn(emailField, passwordField);

            if (res.token) {
                await AsyncStorage.setItem('token', res.token);

                UserDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });

            } else {
                setMessageError('E-mail e/ou senha errado!');
            }

        } else {
            alert('preencha os campos');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    return (
        <Container>
            <BarberImg source={BarberLogo} resizeMode="contain" />

            <InputArea>

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
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastra-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}