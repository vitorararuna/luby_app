import React from "react";
import { Container, IconGH, LoginContainer, Userinput, Enter, Touch, IconArrow } from "./styles";

export default function Login({ navigation }) {
    return (
        <Container>
            <LoginContainer>
                <IconGH name="github" color="#FFCE00" size={110} />
                <Userinput />
                <Touch onPress={() => navigation.navigate('Tabs')}>
                    <Enter>Entrar <IconArrow name="arrowright" color="#000" size={24} /></Enter>
                </Touch>
            </LoginContainer>
        </Container>
    )
}