import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TutorialScreen from '../screens/TutorialScreen';
import MeetingScreen from '../screens/MeetingScreen';
import JoinMeetingScreen from '../screens/JoinMeetingScreen';
import JoinScreen from '../screens/JoinScreen';
import PermissionScreen from '../screens/PermissionScreen';
import TabContactScreen from '../screens/tabs/TabContactScreen';
import TabMeetChatScreen from '../screens/tabs/TabMeetChatScreen';
import TabMeetingScreen from '../screens/tabs/TabMeetingScreen';
import TabSettingsScreen from '../screens/tabs/TabSettingsScreen';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTab from './MyTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const horizontalAnimation = ({ current, layouts, scene }) => {
    return {
        cardStyleInterpolator: ({ index, current, next, layouts: { screen } }) => {
            const translateX = current.progress.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [screen.width, 0, 0],
            });
            return { cardStyle: { opacity, transform: [{ translateX }] } };
        }
    };
};
const option = { headerShown: false, cardStyleInterpolator: horizontalAnimation };

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={option}>

                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
                <Stack.Screen name="MeetingScreen" component={MeetingScreen} />
                <Stack.Screen name="JoinMeetingScreen" component={JoinMeetingScreen} />
                <Stack.Screen name="JoinScreen" component={JoinScreen} />
                <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
                <Stack.Screen name="MyTabs" component={MyTabs} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator  tabBar={props => <MyTab {...props} />}>
            <Tab.Screen name="TabMeetChatScreen" component={TabMeetChatScreen} />
            <Tab.Screen name="TabMeetingScreen" component={TabMeetingScreen} />
            <Tab.Screen name="TabContactScreen" component={TabContactScreen} />
            <Tab.Screen name="TabSettingsScreen" component={TabSettingsScreen} />
        </Tab.Navigator>
    );
}
export default MainNavigator;