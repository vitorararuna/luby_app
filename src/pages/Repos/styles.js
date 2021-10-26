import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: #292929;
    height: 100;
`;

export const Header = styled.View`
    background-color: #1F1F1F;
    height: 10%;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 15px;
`;


export const Repo = styled.Text`
    font-size: 22px;
    color: #fff;
    align-self: center;
`;

export const ArrowIcon = styled(AntDesign)`
    position: absolute;
    align-self: center;
    left: 2%;
`;
