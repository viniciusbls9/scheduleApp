import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { Container, Header, ProfileImage } from './styles';

export default () => {
    const navigation = useNavigation();

    const [name, setName] = useState();

    const { state: user } = useContext(UserContext);

    const handleLogout = async () => {
        await api.logout();
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    const handleUser = async () => {
        let json = await api.getUser();
        console.log(json);
    }
    
    useEffect(() => {
        handleUser(name);
    }, []);

    return (
        <Container>
            <Header>
                <ProfileImage source={{ uri: user.avatar }} />
            </Header>
        </Container>
    )
}