import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    AntDesign,
    Foundation,
    MaterialCommunityIcons,
    SimpleLineIcons,
    Ionicons,
} from "@expo/vector-icons";

import NewsFeedScreen from "../screens/NewsFeedScreen";
import SearchScreen from "../screens/SearchScreen";
import VideoScreen from "../screens/VideoScreen";
import ShopScreen from "../screens/ShopScreen";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="NewsFeed"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "black",
                    height: 90,
                },
            }}
        >
            <Tab.Screen
                name="NewsFeed"
                component={NewsFeedScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "News Feed",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Foundation
                            name="home"
                            size={28}
                            color={focused ? "white" : color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size, focused }) => (
                        <AntDesign
                            name="search1"
                            size={28}
                            color={focused ? "white" : color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Video"
                component={VideoScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "Video",
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons
                            name="play-box-outline"
                            size={28}
                            color={focused ? "white" : color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "Shop",
                    tabBarIcon: ({ color, size, focused }) => (
                        <SimpleLineIcons
                            name="bag"
                            size={28}
                            color={focused ? "white" : color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "User",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name="md-person-circle-outline"
                            size={28}
                            color={focused ? "white" : color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
