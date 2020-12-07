import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
    background-color: #222222;
    flex: 1;
`;

export const Scroller = styled.ScrollView ``;


export const Header = styled.View `
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: #2e2e2e;
`;

export const ProfileImage = styled.Image `
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;

export const ProfileName = styled.Text `
    margin-top: 14px;
    color: #aaa;
    font-size: 16px;
`;

export const ProfileMail = styled.Text `
    color: #aaa;
    font-size: 12px;
`;

export const ChangeInfosContainer = styled.View `
    padding: 30px;
`;

export const ChangeInfos = styled.TouchableOpacity `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #aaa;
`;

export const ChangeInfosText = styled.Text `
    color: #aaa;

`;

export const ChangeInfosIcon = styled.Image `
    width: 22px;
    height: 22px;
`;

export const ExitContainer = styled.View `
    padding: 0 30px;

`;

export const ExitButton = styled.TouchableOpacity `
    height: 60px;
    border-width: 2px;
    border-color: #DCA71B;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const ExitButtonText = styled.Text `
    color: #fff;
`;