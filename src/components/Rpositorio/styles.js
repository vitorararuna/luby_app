import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #292929;
    border-bottom-width: 2px;
    border-bottom-color: #7070705A;
    padding: 15px 0px 25px 0px;
`;

export const RepoName = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-left: 18px;
    color: #fff;
`;

export const Yellow = styled.View`
    background: #ffce00;
    height: 42px;
    width: 10px;
    margin: 0% 0% 0% 0%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;    
`;


export const RepoInfo = styled.Text`
    margin-left: 27px;
    font-size: 18px;
    color: #fff;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 27px 0px 27px;
`;

/* star & lock $ unlock */
export const StarIcon = styled(Feather)`
    margin-right: 7px;
`;

export const StarInfo = styled.Text`
    font-size: 20px;
    color: #fff;
`;


export const LockIcon = styled(Feather)`
    margin-right: 7px;
`;

export const Box = styled.View`
    flex-direction: row;
    align-items: center;
`;