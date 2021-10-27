import React, { useEffect, useState } from "react";
import { Container, Name, Photo, Yellow, ArrowIcon } from './styles';
import vitin from '../../assets/vitin.jpeg';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useUser } from "../../provders/user";

export default function User({ name, avatar, url }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('UserInfos', { name_user: name })}>
            <Container >
                <Yellow />
                <Photo source={{ uri: avatar }} />
                <Name>{`#${name}`}</Name>
                <ArrowIcon name="arrowright" color="#fff" size={30} />
            </Container>
        </TouchableOpacity>
    )
}