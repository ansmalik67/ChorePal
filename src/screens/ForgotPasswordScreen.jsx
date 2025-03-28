import React from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import OctopusImage from '../assets/images/octopus-bg-circle.png'

export default function ForgotPasswordScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.logo}>ChorePal</Text>
            <Image source={OctopusImage} style={styles.image} />
            <Text style={styles.title}>Forgot Password</Text>

            <TextInput placeholder="Enter your email" style={styles.input} placeholderTextColor="#999" />

            <TouchableOpacity style={styles.resetLinkButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.resetLinkText}>Send Reset Link</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.backButtonText}>← Back to Login</Text>
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
    title: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fefefe',
        width: '100%',
        padding: 12,
        borderRadius: 10,
        marginVertical: 6,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        fontFamily: 'Poppins-Regular',
    },
    resetLinkButton: {
        backgroundColor: '#66C2FF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        marginTop: 10,
    },
    resetLinkText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontFamily: 'Poppins-Regular',
    },
    image: {
        width: 120,
        height: 120,
        marginBottom: 30,
    },
});
