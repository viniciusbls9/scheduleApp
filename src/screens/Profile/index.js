import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { Container, Header, ProfileImage, ProfileName, ProfileMail } from './styles';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const { state: user } = useContext(UserContext);

    const handleLogout = async () => {
        await api.logout();
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    const handleUser = async () => {
        let json = await api.getUser();
        setName(json.data.name);
        setEmail(json.data.email);
    }

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <Container>
            <Header>
                <ProfileImage source={{ uri: user.avatar }} />
                <ProfileName>Olá, {name}</ProfileName>
                <ProfileMail>{email}</ProfileMail>
            </Header>
        </Container>
    )
}