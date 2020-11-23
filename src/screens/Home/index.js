import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import api from '../../services/api';
import BarberItem from '../../components/BarberItem';
import search from '../../assets/search.png';
import mylocation from '../../assets/my_location.png';
import {
    Container,
    Scroller,
    Header,
    Title,
    SearchButton,
    ImageIcon,
    LocationArea,
    LocationInput,
    LocationFinder,
    LoadingIcon,
    ListArea,
    Refresh,
    RefreshText,

} from './styles'

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [messageError, setMessageError] = useState('');

    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );
        if (result == 'granted') {

            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
                getBarbers();
            });
        }
    }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let lat = null;
        let lng = null;

        if (coords) {
            lat = coords.latitude;
            lng = coords.longitude;
        }

        let res = await api.getBarbers(lat, lng, locationText);
        if (res.error == '') {
            if (res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            setMessageError(res.error);
        }

        setLoading(false);
    }

    useEffect(() => {
        getBarbers();
    }, []);

    const handleRefresh = () => {
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }

    return (
        <Container>
            <Header>
                <Title numberOfLines={2}>Encontre o seu Barbeiro Favorito</Title>
                <SearchButton onPress={() => navigation.navigate('Search')}>
                    <ImageIcon source={search} />
                </SearchButton>
            </Header>

            <LocationArea>
                <LocationInput
                    placeholder="Onde você está?"
                    placeholderTextColor="#fff"
                    value={locationText}
                    onChangeText={t => setLocationText(t)}
                    onEndEditing={handleLocationSearch}
                />
                <LocationFinder onPress={handleLocationFinder}>
                    <ImageIcon source={mylocation} />
                </LocationFinder>
            </LocationArea>

            {loading &&
                <LoadingIcon size="large" color="#fff" />
            }

            {messageError != '' &&
                <Error>{messageError}</Error>
            }

            <ListArea
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={list}
                renderItem={({ item }) => <BarberItem key={item.id} data={item} />}
            />

            <Refresh onPress={handleRefresh} underlayColor="transparent">
                <RefreshText>Atualizar Listagem</RefreshText>
            </Refresh>
        </Container>
    );
}