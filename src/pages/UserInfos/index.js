import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Header, Logout, UserName, IconOut, UserInfos, UserInfos2, Bio, Name, Email, City, Square, Number, TextInfo, BioText, BioSpam, Yellow, BioBox, NameBox, Yellow0, Photo, ArrowIcon } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useUser } from '../../provders/user'


export default function UserInfos_({ route, navigation }) {

    const { name_user } = route.params;
    const [newUser, setNewUser] = useState([]);
    const { login } = useUser();


    useEffect(() => {
        async function handleRepos() {
            await api.get(`/users/${name_user}`)
                .then((response) => {
                    setNewUser(oldUser => ({
                        ...oldUser,
                        login: response.data.login,
                        name: response.data.name,
                        email: response.data.email,
                        location: response.data.location,
                        company: response.data.company,
                        bio: response.data.bio,
                        avatar_url: response.data.avatar_url,
                        followers_url: response.data.followers_url,
                        following_url: response.data.following_url,
                        organizations_url: response.data.organizations_url,
                        starred_url: response.data.starred_url,
                        public_gists: response.data.public_gists,
                        public_repos: response.data.public_repos,
                        followers: response.data.followers,
                        following: response.data.following,
                        signed: true,
                    }))
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        handleRepos()
    }, [name_user]);

    async function loadNewUser() {
        await login(name_user)
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Photo source={{ uri: newUser.avatar_url }} />
                <Header>
                    <ArrowIcon onPress={() => navigation.navigate('Tabs')} name="arrowleft" color="#fff" size={30} />
                    <UserName>{`#${newUser.login}`}</UserName>
                    <TouchableOpacity onPress={() => loadNewUser()}>
                        <Logout>Salvar <IconOut name="log-out" size={22} color="#5CBC29" /></Logout>
                    </TouchableOpacity>
                </Header>
                <UserInfos>
                    <NameBox>
                        <Yellow0 />
                        <Name>{newUser.name}</Name>
                    </NameBox>
                    <Email>{newUser.email ? newUser.email : "email do usuário privado"}</Email>
                    <City>{newUser.location ? newUser.location : "local do usuário privado"}</City>
                </UserInfos>
                <UserInfos2>
                    <Square>
                        <Number>{newUser.followers}</Number>
                        <TextInfo>Seguidores</TextInfo>
                    </Square>
                    <Square>
                        <Number>{newUser.following}</Number>
                        <TextInfo>Seguindo</TextInfo>
                    </Square>
                    <Square>
                        <Number>{newUser.public_repos}</Number>
                        <TextInfo>Repos</TextInfo>
                    </Square>
                </UserInfos2>
                <Bio>
                    <BioBox>
                        <Yellow />
                        <BioText>BIO</BioText>
                    </BioBox>
                    <BioSpam>{newUser.bio}</BioSpam>
                </Bio>
            </Container>
        </SafeAreaView>
    )
}

