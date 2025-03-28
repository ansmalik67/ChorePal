import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView
} from 'react-native';
import OctopusImage from '../assets/images/octopus-bg-circle.png'

export default function LoginScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.logo}>ChorePal</Text>

            <Image source={OctopusImage} style={styles.image} />

            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#999" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#999" />

            <TouchableOpacity style={styles.goButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.goButtonText}>Go!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>Don’t have an account? Sign up!</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AEE2F3',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontFamily: 'Poppins-Regular',
    },
    logo: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 20,
        fontFamily: 'Poppins-Bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fefefe',
        width: '100%',
        padding: 12,
        borderRadius: 10,
        marginVertical: 6,
        fontSize: 16,
        // 👇 Shadow (iOS)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // 👇 Elevation (Android)
        elevation: 3,
    },
    goButton: {
        backgroundColor: '#66C2FF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        marginTop: 10,
        fontFamily: 'Poppins-Regular',

    },
    goButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    forgotPassword: {
        color: '#fff',
        marginTop: 10,
        textDecorationLine: 'underline',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        fontFamily: 'Poppins-Regular',
        textShadowRadius: 3,
    },
    signupContainer: {
        backgroundColor: '#66C2FF',
        padding: 14,
        borderRadius: 15,
        marginTop: 60,
        width: '100%',
        alignItems: 'center',
    },
    signupText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },
});