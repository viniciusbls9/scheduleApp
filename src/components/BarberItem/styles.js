import styled from 'styled-components/native';

export const Area = styled.TouchableHighlight `
    background-color: #3d3d3d;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
    elevation: 5;
`;

export const Avatar = styled.Image `
    width: 80px;
    height: 80px;
    border-radius: 20px;
`;

export const InfoArea = styled.View `
    margin-left: 20px;
    justify-content: space-between;
`;

export const Username = styled.Text `
    color: #fff;
    font-size: 17px;
    font-weight: bold;
`;

export const SeeProfileButton = styled.View `
    width: 85px;
    height: 26px;
    border: 1px solid #DCA71B;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const SeeProfileButtonText = styled.Text `
    color: #fff;
    font-size: 13px;
`;
