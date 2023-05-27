import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Foundation } from "@expo/vector-icons";

import NewsFeedScreen from "../screens/NewsFeedScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="NewsFeed">
            <Tab.Screen
                name="NewsFeed"
                component={NewsFeedScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "News Feed",
                    tabBarIcon: ({ color, size }) => (
                        <Foundation name="home" size={size} color={color} />
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
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="search1" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
