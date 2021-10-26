import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
    flex:1;
    background-color: #292929;
    justify-content: center;
`;

export const LoginContainer = styled.View`
    align-items: center;

`;

export const IconGH = styled(AntDesign)`
    margin-bottom: 65px;
`;

export const IconArrow = styled(AntDesign)`
`;

export const Touch = styled(TouchableOpacity)`
    background: #FFCE00;
    border-radius: 10px;
    width: 380px;
    height:65px;
    align-items: center;
    justify-content: center;
`;


export const Userinput = styled(TextInput).attrs({
    placeholder: "Usuário",
    autoCorrect: false,
})`
    background: #FFFFFF;
    border-radius: 10px;
    width: 380px;
    height:65px;
    padding-left: 15px;
    font-size: 20px;
    margin-bottom: 18px;
`;

export const Enter = styled.Text`
    font-size: 22px;
    /* align-self: center; */
    /* text-align: center; */
`;

