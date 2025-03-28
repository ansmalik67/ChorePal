import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import HouseholdScreen from '../screens/HouseholdScreen';
import RoomScreen from '../screens/RoomScreen';
import AddRoomScreen from '../screens/AddRoomScreen';
import TaskManagementScreen from '../screens/TaskManagementScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
                <Stack.Screen name="Household" component={HouseholdScreen} />
                <Stack.Screen name="Room" component={RoomScreen} />
                <Stack.Screen name="AddRoom" component={AddRoomScreen} />
                <Stack.Screen name="TaskManagement" component={TaskManagementScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
