import React from "react";
import { Container, Name, Photo, Yellow, ArrowIcon } from './styles';
import vitin from '../../assets/vitin.jpeg';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function User() {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('UserInfos')}>
            <Container >
                <Yellow />
                <Photo source={vitin} />
                <Name>#vitorararuna</Name>
                <ArrowIcon name="arrowright" color="#fff" size={30} />
            </Container>
        </TouchableOpacity>
    )
}