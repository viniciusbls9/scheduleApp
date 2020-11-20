import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

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

} from './styles'

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

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
                console.log(info);
                setCoords(info.coords);
                getBarbers();
            });
        }
    }

    const getBarbers = () => {

    }

    return (
        <Container>
            <Scroller>
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
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <ImageIcon source={mylocation} />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadingIcon size="large" color="#fff" />
                }

            </Scroller>
        </Container>
    );
}