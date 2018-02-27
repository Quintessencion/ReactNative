import React from 'react';
import {StyleSheet} from 'react-native';
import SearchEvent from "../component/SearchEvent";

export default class EventTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Поиск',
    };

    render() {
        return (
            <SearchEvent/>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#e8eded',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    image: {
        alignSelf: 'center',
        marginTop: 52,
        width: 188,
        height: 188,
    },
    text: {
        fontSize: 14,
        color: 'grey',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
    },
    textDescription: {
        alignSelf: 'center',
        marginLeft: 58,
        marginRight: 58,
    },
    textSelection: {
        color: '#66a636',
        textDecorationLine: 'underline',
    },
});