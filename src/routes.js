import React from "react";

import { Feather } from "@expo/vector-icons";

import Home from './pages/Home';
import Login from './pages/Login';
import Repos from './pages/Repos';
import Seguidores from './pages/Seguidores';
import Seguindo from './pages/Seguindo';
import UserInfos_ from "./pages/UserInfos";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useUser } from "./provders/user";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#A5A5A5',
                tabBarStyle: {
                    borderTopLeftRadius: 22,
                    height: 62,
                },
                tabBarLabelStyle: {
                    fontSize: 17
                },
                headerTitleStyle: {
                    fontWeight: '900'
                }

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Repos" component={Repos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="github" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Seguidores" component={Seguidores}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="users" color={color} size={33} />
                    ),
                }}
            />
            <Tab.Screen name="Seguindo" component={Seguindo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="users" color={color} size={33} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const Routes = () => {
    const { user } = useUser();
    return (
        <Stack.Navigator>
            {user.signed
                ?
                <>
                    <Stack.Screen options={{ headerShown: false }} name="Tabs" component={TabNavigator} />
                    <Stack.Screen options={{ headerShown: false }} name="UserInfos" component={UserInfos_} />
                </>
                :
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            }
        </Stack.Navigator>
    )
}


export default Routes;