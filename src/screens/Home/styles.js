import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #222;
    padding: 20px;
`;

export const Scroller = styled.ScrollView `
    flex: 1;
`;

export const Header = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text `
    width: 170px;
    font-size: 22px;
    font-weight: bold;
    color: #DCA71B;
`;

export const SearchButton = styled.TouchableHighlight `
    width: 26px;
    height: 26px;
`;

export const ImageIcon = styled.Image `
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View `
    background-color: #2e2e2e;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
    elevation: 6;
`;

export const LocationInput = styled.TextInput `
    flex: 1;
    font-size: 16px;
    color: #fff;
`;

export const LocationFinder = styled.TouchableOpacity `
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator `
    margin-top: 50px;
`;

export const ListArea = styled.FlatList `
    margin-top: 30px;
    /* margin-bottom: 30px; */
`;

export const Refresh = styled.TouchableHighlight `
    margin-top: 10px;
`;

export const RefreshText = styled.Text `
    color: #fff;

`;