import React, { useState, useEffect } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        signed: false,
    });

    async function login(value) {
        await api.get(`/users/${value}`)
            .then((response) => {
                setUser(oldUser => ({
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
                AsyncStorage.setItem("github", value);
            })
            .catch((error) => {
                AsyncStorage.removeItem("github");
            });
    }

    async function logout() {
        setUser(oldUser => ({ ...oldUser, signed: false }))
        await AsyncStorage.removeItem("github");
    }

    useEffect(() => {
        async function Persist() {
            AsyncStorage.getItem("github")
                .then((value) => {
                    if (value != null) {
                        login(value)
                    }
                    else {
                        logout()
                    }
                })
                .catch((error) => {
                    logout()
                });
        }
        Persist();
    }, []);


    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => React.useContext(UserContext);