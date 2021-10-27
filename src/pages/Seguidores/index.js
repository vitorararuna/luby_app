import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { ArrowIcon, Container, Header, Followers, List } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import User from '../../components/User';
import { useUser } from "../../provders/user";
import { useNavigation } from "@react-navigation/native";

export default function Seguidores() {

    const navigation = useNavigation();
    const { user } = useUser();
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        async function handleRepos() {
            await api.get(`/users/${user.login}/followers`)
                .then((response) => {
                    setFollowers(response.data)
                });
        }
        handleRepos()
    }, [user]);
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Header>
                    <ArrowIcon onPress={() => { navigation.goBack() }} name="arrowleft" color="#fff" size={30} />
                    <Followers>{`${user.followers} Seguidores`}</Followers>
                </Header>
                <List
                    data={followers}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <User
                            name={item.login}
                            avatar={item.avatar_url}
                            url={item.url}
                        />
                    )}
                />
            </Container>
        </SafeAreaView>
    )
}