import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to ChorePal</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D4F1F4' },
    text: { fontSize: 24, fontWeight: 'bold' },
});
