import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.png';
import PersonIcon from '../../assets/person.png';
import EmailIcon from '../../assets/email.png';
import LockIcon from '../../assets/lock.png';

import SignInput from '../../components/SignInput';
import {
    Container,
    BarberImg,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
} from './styles'

export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [PasswordField, setPasswordField] = useState('');

    const handleSignClick = () => {

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
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
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
                    value={PasswordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}