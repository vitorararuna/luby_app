import React from "react";
import { ArrowIcon, Container, Header, Followers } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import User from '../../components/User';

export default function Seguidores({ navigation }) {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Header>
                    <ArrowIcon name="arrowleft" color="#fff" size={30} />
                    <Followers>10 Seguidores</Followers>
                </Header>
                <User />
                <User />
                <User />
                <User />
                <User />
            </Container>
        </SafeAreaView>
    )
}