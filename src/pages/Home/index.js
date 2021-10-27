import React from "react";
import { Container, Header, Logout, UserName, IconOut, UserInfos, UserInfos2, Bio, Name, Email, City, Square, Number, TextInfo, BioText, BioSpam, Yellow, BioBox, NameBox, Yellow0, Photo, } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../provders/user";
import { TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    const { user, logout } = useUser();
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Photo source={{ uri: user.avatar_url }} />
                <Header>
                    <UserName>{`#${user.login}`}</UserName>
                    <TouchableOpacity onPress={() => logout()}>
                        <Logout>Sair <IconOut name="log-out" size={22} color="#D03434" /></Logout>
                    </TouchableOpacity>
                </Header>
                <UserInfos>
                    <NameBox>
                        <Yellow0 />
                        <Name>{user.name}</Name>
                    </NameBox>
                    <Email>{user.email ? user.email : "email do usuário privado"}</Email>
                    <City>{user.location}</City>
                </UserInfos>
                <UserInfos2>
                    <TouchableOpacity onPress={() => navigation.navigate('Seguidores')}>
                        <Square>
                            <Number>{user.followers}</Number>
                            <TextInfo>Seguidores</TextInfo>
                        </Square>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Seguindo')}>
                        <Square>
                            <Number>{user.following}</Number>
                            <TextInfo>Seguindo</TextInfo>
                        </Square>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Repos')}>
                        <Square>
                            <Number>{user.public_repos}</Number>
                            <TextInfo>Repos</TextInfo>
                        </Square>
                    </TouchableOpacity>
                </UserInfos2>
                <Bio>
                    <BioBox>
                        <Yellow />
                        <BioText>BIO</BioText>
                    </BioBox>
                    <BioSpam>{user.bio}</BioSpam>
                </Bio>
            </Container>
        </SafeAreaView>
    )
}

