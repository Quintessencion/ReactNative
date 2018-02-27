import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class NkoTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'По НКО',
    };

    render() {
        return (
            <View style={styles.tab}>
                <Text style={styles.textDescription}>
                    This is tab 2
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#e8eded',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDescription: {
        fontSize: 30,
    }
});