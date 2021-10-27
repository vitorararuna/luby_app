import React, { useState } from "react";
import { Container, IconGH, LoginContainer, Userinput, Enter, Touch, IconArrow } from "./styles";
import { useUser } from "../../provders/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../services/api';

export default function Login() {

    const { login } = useUser();
    const [input, setIpunt] = useState("")

    async function handleLogin() {
        login(input)
    }

    return (
        <Container>
            <LoginContainer>
                <IconGH name="github" color="#FFCE00" size={110} />
                <Userinput value={input} onChangeText={setIpunt} />

                <Touch onPress={() => handleLogin()}>
                    <Enter>Entrar <IconArrow name="arrowright" color="#000" size={24} /></Enter>
                </Touch>
            </LoginContainer>
        </Container>
    )
}