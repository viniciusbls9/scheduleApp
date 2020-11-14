import React, { useState } from 'react';

import BarberLogo from '../../assets/barber.png';
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

    const [emailField, setEmailField] = useState('');
    const [PasswordField, setPasswordField] = useState('');

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
                    value={PasswordField}
                    onChangeText={t => setPasswordField(t)}
                />


                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastra-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}