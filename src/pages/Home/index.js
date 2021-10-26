import React from "react";
import { Container, Header, Logout, UserName, IconOut, UserInfos, UserInfos2, Bio, Name, Email, City, Square, Number, TextInfo, BioText, BioSpam, Yellow, BioBox, NameBox, Yellow0, Photo, } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import vitin from '../../assets/vitin.jpeg';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Photo source={vitin} />
                <Header>
                    <UserName>#vitorararuna</UserName>
                    <Logout>Sair <IconOut name="log-out" size={22} color="#D03434" /></Logout>
                </Header>
                <UserInfos>
                    <NameBox>
                        <Yellow0 />
                        <Name>VITOR ARARUNA</Name>
                    </NameBox>
                    <Email>contato.vitorararuna@gmail.com</Email>
                    <City>Brasília/DF</City>
                </UserInfos>
                <UserInfos2>
                    <Square>
                        <Number>32</Number>
                        <TextInfo>Seguidores</TextInfo>
                    </Square>
                    <Square>
                        <Number>32</Number>
                        <TextInfo>Seguindo</TextInfo>
                    </Square>
                    <Square>
                        <Number>10</Number>
                        <TextInfo>Repos</TextInfo>
                    </Square>
                </UserInfos2>
                <Bio>
                    <BioBox>
                        <Yellow />
                        <BioText>BIO</BioText>
                    </BioBox>
                    <BioSpam>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</BioSpam>
                </Bio>
            </Container>
        </SafeAreaView>
    )
}

