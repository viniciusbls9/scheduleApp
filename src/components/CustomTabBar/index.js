import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import { TabArea, TabItem, Icon, TabItemCenter, AvatarIcon } from './styles';
import HomeIcon from '../../assets/home.png';
import SearchIcon from '../../assets/search.png';
import TodayIcon from '../../assets/today.png';
import FavoriteIcon from '../../assets/favorite.png';
import AccountIcon from '../../assets/account.png';

export default ({ state, navigation }) => {

    const { state: user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={ () => goTo('Home') } underlayColor="#00f">
                <Icon style={{ opacity: state.index === 0 ? 1 : 0.5 }} source={HomeIcon} resizeMode="contain" />
            </TabItem>

            <TabItem onPress={() => goTo('Search')}>
                <Icon style={{ opacity: state.index === 1 ? 1 : 0.5 }} source={SearchIcon} resizeMode="contain" />
            </TabItem>

            <TabItemCenter onPress={() => goTo('Appointments')}>
                <Icon style={{ opacity: state.index === 2 ? 1 : 0.5 }} source={TodayIcon} resizeMode="contain" />
            </TabItemCenter>

            <TabItem onPress={() => goTo('Favorites')}>
                <Icon style={{ opacity: state.index === 3 ? 1 : 0.5 }} source={FavoriteIcon} resizeMode="contain" />
            </TabItem>

            <TabItem onPress={() => goTo('Profile')}>

                {user.avatar != '' ? 
                    <AvatarIcon source={{ uri: user.avatar }} />
                    :
                    <Icon style={{ opacity: state.index === 4 ? 1 : 0.5 }} source={AccountIcon} resizeMode="contain" /> 
                }

            </TabItem>
        </TabArea>
    );
}