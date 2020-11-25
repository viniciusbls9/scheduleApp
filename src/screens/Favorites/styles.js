import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `
    flex: 1;
    background-color: #222;
`;

export const SearchArea = styled.View `
    background-color: #2e2e2e;
    height: 50px;
    border-radius: 25px;
    padding: 0 20px;
    margin: 20px;
`;

export const SearchInput = styled.TextInput `
    flex: 1;
    font-size: 16px;
    color: #fff;
`;

export const Scroller = styled.ScrollView `
    flex: 1;
    padding: 0 20px;
`;

export const LoadingIcon = styled.ActivityIndicator `
    margin-top: 30px;
`;

export const ListArea = styled.View `
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text `
    color: #fff;
    margin-top: 20px;
    text-align: center;
`;