import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
    flex: 1;
`;
export const Header = styled.View `
    height: 200px;
    justify-content: center;
    align-items: center;
    background-color: #222;
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