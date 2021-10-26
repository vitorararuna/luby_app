import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #292929;
    border-bottom-width: 2px;
    border-bottom-color: #7070705A;
    padding: 15px 0px 25px 0px;
    flex-direction: row;
    align-items: center;
`;

export const Yellow = styled.View`
    background: #ffce00;
    height: 42px;
    width: 15px;
    margin: 0% 0% 0% 0%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;    
`;

export const Photo = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 500px;
    border: 3px white solid;
    margin-left: 25px;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-left: 40px;
`;

export const ArrowIcon = styled(AntDesign)`
    position: absolute;
    align-self: center;
    right: 4%;
`;