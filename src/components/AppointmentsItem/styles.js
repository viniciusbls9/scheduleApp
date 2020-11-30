import styled from 'styled-components/native';

export const Area = styled.View `
    background-color: #3d3d3d;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
`;

export const UserArea = styled.View `
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image `
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 20px;
`;

export const UserName = styled.Text `
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const SplitArea = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ServiceText = styled.Text `
    font-size: 14px;
    font-weight: bold;
    color: #fff;
`;

export const DateText = styled.Text `
    font-size: 13px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 10px;
    border: 1px solid #DCA71B;
    color: #fff;
`;