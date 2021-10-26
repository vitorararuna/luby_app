import React from "react";
import { Container, RepoInfo, RepoName, Yellow, Footer, Box, StarIcon, StarInfo, LockIcon } from './styles'

export default function Repositorio({ navigation }) {
    return (
        <Container>
            <Box>
                <Yellow />
                <RepoName>Repositório-X-React-Native</RepoName>
            </Box>
            <RepoInfo>
                Repository for centralization of the BrasiliApp mobile project
            </RepoInfo>
            <Footer>
                <Box>
                    <StarIcon name="star" color="#FFCE00" size={25} />
                    <StarInfo>32</StarInfo>
                </Box>
                <Box>
                    <LockIcon name="unlock" color="#63BF1F" size={25} />
                    <LockIcon name="lock" color="#CC042A" size={25} />
                </Box>
            </Footer>
        </Container>
    )
}