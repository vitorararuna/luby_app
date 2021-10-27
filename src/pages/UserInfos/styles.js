import styled from 'styled-components';
import { Feather, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: #292929;
    height: 100;
`;

export const Header = styled.View`
    background-color: #1F1F1F;
    height: 14%;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 18px;
`;


export const ArrowIcon = styled(AntDesign)`

`;

export const UserName = styled.Text`
    font-size: 22px;
    color: #fff;
    margin-left: 50px;
`;

export const Logout = styled.Text`
    font-size: 22px;
    color: #fff;
    right: 2%;
`;

export const IconOut = styled(Feather)`
`;

export const UserInfos = styled.View`
    background-color: #292929;
    height: 28%;
`;

export const NameBox = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
    margin-left: 5%;
    margin-top: 23%;
`;

export const Yellow0 = styled.View`
    background: #ffce00;
    height: 33px;
    width: 10px;
    margin: 24% 0% 0% 0%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
`;

export const Email = styled.Text`
    font-size: 18px;
    color: #FFF;
    margin-left: 7%;

`;

export const City = styled.Text`
    font-size: 18px;
    color: #FFF;
    margin-left: 7%;

`;

export const UserInfos2 = styled.View`
    background-color: #5252525D;
    height: 15%;
    flex-direction: row;
    justify-content: space-around
`;

export const Square = styled.View`
align-items: center;
`;


export const Number = styled.Text`
    font-size: 55px;
    font-weight: bold;
    color: #fff
`;

export const TextInfo = styled.Text`
    font-size: 18px;
    color: #fff
`;

export const Bio = styled.View`
    background-color: #292929;
    /* height: 500px; */
`;

export const BioBox = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const BioText = styled.Text`
    margin-left: 5%;
    margin-top: 3%;
    font-size: 28px;
    font-weight: bold;
    color: #FFF;
`;

export const BioSpam = styled.Text`
    font-size: 22px;
    color: #FFF;
    margin-left: 7%;
`;

export const Yellow = styled.View`
    background: #ffce00;
    height: 33px;
    width: 10px;
    margin: 4% 0% 0% 0%;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
`;

export const Photo = styled.Image`
    position: absolute;
    width: 137px;
    height: 137px;
    align-self: center;
    bottom: 76%;
    border-radius: 500px;
    border-width: 3px;
    border-color: white;
    z-index: 1
`;