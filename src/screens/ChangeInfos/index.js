import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext';
import SignInput from '../../components/SignInput';
import { Container, ButtonConfirmed, ButtonConfirmedText } from './styles';

export default () => {
    const { state: user } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');

    const handleUser = async () => {
        let json = await api.getUser();
        setName(json.data.name);
    }

    const changeConfirmed = async () => {
        if(name != '' && password != '' && passwordConfirmed != '') {
            await api.updateUser({
                name,
                password,
                passwordConfirmed,
            });
        } else {
            alert (error);
        }
    }

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <Container>
            <SignInput
                placeholder="Troque seu nome"
                value={name}
                onChangeText={t => setName(t)}
                autoCapitalize="none"
                />

            <SignInput
                placeholder="Troque sua senha"
                value={password}
                onChangeText={t => setPassword(t)}
                autoCapitalize="none"
                password={true}
                />

            <SignInput
                placeholder="Repita sua senha"
                value={passwordConfirmed}
                onChangeText={t => setPasswordConfirmed(t)}
                autoCapitalize="none"
                password={true}
            />

            <ButtonConfirmed onPress={changeConfirmed}>
                <ButtonConfirmedText>
                    Alterar Informações
                </ButtonConfirmedText>
            </ButtonConfirmed>
        </Container>
    );
}