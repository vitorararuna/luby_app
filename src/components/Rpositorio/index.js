import React from "react";
import { Container, RepoInfo, RepoName, Yellow, Footer, Box, StarIcon, StarInfo, LockIcon } from './styles'

export default function Repositorio({ name, description, url, stars }) {
    return (
        <Container>
            <Box>
                <Yellow />
                <RepoName>{name}</RepoName>
            </Box>
            <RepoInfo>
                {description ? description : "Repo Sem Descrição"}
            </RepoInfo>
            <Footer>
                <Box>
                    <StarIcon name="star" color="#FFCE00" size={25} />
                    <StarInfo>{stars}</StarInfo>
                </Box>
                <Box>
                    <LockIcon name="unlock" color="#63BF1F" size={25} />
                    <LockIcon name="lock" color="#CC042A" size={25} />
                </Box>
            </Footer>
        </Container>
    )
}