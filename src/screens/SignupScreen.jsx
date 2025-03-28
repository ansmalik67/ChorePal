import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up Screen</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backText}>← Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AEE2F3' },
    text: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
    backButton: { marginTop: 20 },
    backText: { color: '#fff', textDecorationLine: 'underline' },
});
