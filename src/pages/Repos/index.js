import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { ArrowIcon, Container, Header, Repo, List } from './styles'
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../provders/user";
import Repositorio from '../../components/Rpositorio'
import { useNavigation } from "@react-navigation/native";

export default function Repos() {

    const navigation = useNavigation();
    const { user } = useUser();
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function handleRepos() {
            await api.get(`/users/${user.login}/repos`)
                .then((response) => {
                    setRepos(response.data)
                });
        }
        handleRepos()
    }, [user]);

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Container>
                <Header>
                    <ArrowIcon onPress={() => { navigation.goBack() }} name="arrowleft" color="#fff" size={30} />
                    <Repo>{`${user.public_repos} Repositórios`}</Repo>
                </Header>

                <List
                    data={repos}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Repositorio
                            name={item.name}
                            url={item.html_url}
                            stars={item.stargazers_count}
                            description={item.description}
                        />
                    )}
                />

            </Container>
        </SafeAreaView>
    )
}