import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class EventTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'По мероприятиям',
    };

    render() {
        return (
            <View style={styles.tab}>
                <Image source={require('../images/img_zoom.png')}
                       style={styles.image}/>
                <View style={{marginTop: 40}}/>
                <Text style={[styles.textDescription, styles.text]}>
                    Напишите в строке поиска название
                </Text>
                <Text style={[styles.textDescription, styles.text]}>
                    мероприятия или ключевые слова.
                </Text>
                <View style={{marginTop: 10}}/>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style={styles.text}>
                        Например,{"\t"}
                    </Text>
                    <Text style={[styles.text, styles.textSelection]}>
                        мастер-класс, помощь
                    </Text>
                </View>
            </View>
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