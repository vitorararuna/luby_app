import React from "react";
import { ArrowIcon, Container, Header, Repo } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import Repositorio from '../../components/Rpositorio'

export default function Repos({ navigation }) {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Header>
                    <ArrowIcon name="arrowleft" color="#fff" size={30} />
                    <Repo>10 Repositórios</Repo>
                </Header>
                <Repositorio />
                <Repositorio />
            </Container>
        </SafeAreaView>
    )
}