import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import api from '../../services/api';
import Stars from '../../components/Stars';
import favorite from '../../assets/favorite.png';
import backIcon from '../../assets/back.png';
import NavPrevIcon from '../../assets/nav_prev.png';
import NavNextIcon from '../../assets/nav_next.png';

import {
    Container,
    Scroller,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    UserFavImage,
    ServiceArea,
    ServicesTitle,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChosseButton,
    ServiceButtonText,
    TestimonialArea,
    TestimonialItem,
    TestimonialInfo,
    TestimonialName,
    TestimonialBody,
    BackButton,
    BackIcon,
    LoadingIcon,
    NavIcon,

} from './styles';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBarberInfo = async () => {
            setLoading(true);
            let json = await api.getBarber(userInfo.id);
            if (json.error == '') {
                setUserInfo(json.data);
            } else {
                alert(json.error);
            }
            setLoading(false);
        }

        getBarberInfo();
    }, []);

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ?
                    <Swiper
                        style={{ height: 240 }}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{
                            top: 15,
                            right: 15,
                            bottom: null,
                            left: null
                        }}
                        autoplay={true}
                    >

                        {userInfo.photos.map((item, key) => (
                            <SwipeItem key={key}>
                                <SwipeImage source={{ uri: item.url }} resizeMode="cover" />
                            </SwipeItem>
                        ))}

                    </Swiper>
                    :
                    <FakeSwiper>
                        <UserInfoName>Barbeiro não possui imagens</UserInfoName>
                    </FakeSwiper>
                }

                <PageBody>

                    <UserInfoArea>
                        <UserAvatar source={{ uri: userInfo.avatar }} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>

                        <UserFavButton>
                            <UserFavImage source={favorite} />
                        </UserFavButton>
                    </UserInfoArea>

                    {loading &&
                        <LoadingIcon size="large" color="#DCA71B" />
                    }

                    {userInfo.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de Serviços</ServicesTitle>

                            {userInfo.services.map((item, key) => (
                                <ServiceItem key={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice> R$ {item.price}</ServicePrice>
                                    </ServiceInfo>

                                    <ServiceChosseButton>
                                        <ServiceButtonText>Agendar</ServiceButtonText>
                                    </ServiceChosseButton>
                                </ServiceItem>
                            ))}
                        </ServiceArea>
                    }

                    {userInfo.testimonials && userInfo.testimonials.length > 0 &&
                        <TestimonialArea>
                            <Swiper
                                style={{ height: 110 }}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavIcon source={NavPrevIcon} />}
                                nextButton={<NavIcon source={NavNextIcon} />}
                            >

                                {userInfo.testimonials.map((item, key) => (
                                    <TestimonialItem key={key}>
                                        <TestimonialInfo>
                                            <TestimonialName>{item.name}</TestimonialName>
                                            <Stars stars={item.rate} showNumber={false} />
                                        </TestimonialInfo>
                                        <TestimonialBody>{item.body}</TestimonialBody>
                                    </TestimonialItem>
                                ))}

                            </Swiper>
                        </TestimonialArea>
                    }

                </PageBody>
            </Scroller>

            <BackButton onPress={handleBackButton}>
                <BackIcon source={backIcon} />
            </BackButton>

        </Container>
    );
}