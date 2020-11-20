import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #222;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #DCA71B;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #222;
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`

`;

export const PageBody = styled.View`
    background-color: #222;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
    padding: 20px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -35px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 20px;
    border-width: 3px;
    border-color:  #222;
`;

export const UserInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableHighlight`
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: 2px solid #999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const UserFavImage = styled.Image`
    width: 20px;
    height: 20px;
`;

export const ServiceArea = styled.View`

`;

export const TestimonialArea = styled.View`

`;