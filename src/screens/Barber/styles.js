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
    height: 180px;
    background-color: #2e2e2e;
    align-items: center;
    justify-content: center;
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
    margin-top: 40px;
`;

export const ServicesTitle = styled.Text `
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;
`;

export const ServiceItem = styled.View `
    flex-direction: row;
    margin-bottom: 40px;
`;

export const ServiceInfo = styled.View `
    flex:1 ;
`;

export const ServiceName = styled.Text `
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const ServicePrice = styled.Text `
    font-size: 14px;
    color: #f0bb30;
    font-weight: bold;
`;

export const ServiceChosseButton = styled.TouchableOpacity `
    background-color: #f0bb30;
    border-radius: 10px;
    padding: 10px 15px;
`;

export const ServiceButtonText = styled.Text `
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;

export const TestimonialArea = styled.View `
    margin-bottom: 30px;
`;

export const TestimonialItem = styled.View `
    background-color: #2e2e2e;
    padding: 15px 20px;
    border-radius: 10px;
    height: 110px;
    justify-content: center;
    margin-left: 40px;
    margin-right: 40px;
`;

export const TestimonialInfo = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TestimonialName = styled.Text `
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const TestimonialBody = styled.Text `
    font-size: 13px;
`;

export const BackButton = styled.TouchableOpacity `
    position: absolute;
    left: 15px;
    top: 15px;
    z-index: 9;
`;

export const BackIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const LoadingIcon = styled.ActivityIndicator `
    margin-top: 50px;
`;

export const NavIcon = styled.Image `
    width: 20px;
    height: 20px;
`;

export const Error = styled.Text `
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin-top :40px;
`;