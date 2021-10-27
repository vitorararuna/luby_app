import React, { useState } from "react";
import { Container, IconGH, LoginContainer, Userinput, Enter, Touch, IconArrow, Campo } from "./styles";
import { useUser } from "../../provders/user";

export default function Login() {

    const { login } = useUser();
    const [input, setIpunt] = useState("")
    const [campo, setCampo] = useState(false)

    async function handleLogin() {
        if (input == "") { setCampo(true) }
        else { login(input), setCampo(false) }

    }

    return (
        <Container>
            <LoginContainer>
                <IconGH name="github" color="#FFCE00" size={110} />
                <Userinput value={input} onChangeText={setIpunt} />

                {campo && <Campo>Campo Obrigatório</Campo>}

                <Touch onPress={() => handleLogin()}>
                    <Enter>Entrar <IconArrow name="arrowright" color="#000" size={24} /></Enter>
                </Touch>
            </LoginContainer>
        </Container>
    )
}