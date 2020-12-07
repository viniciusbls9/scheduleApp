import styled from 'styled-components/native';

export const Container = styled.View `
    background-color: #222;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const ButtonConfirmed = styled.TouchableOpacity `
    height: 50px;
    width: 100%;
    border-width: 2px;
    border-color: #DCA71B;
    padding: 4px 20px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;

export const ButtonConfirmedText = styled.Text `
    color: #fff;
`;