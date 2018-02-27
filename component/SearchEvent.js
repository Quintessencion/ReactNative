import React from 'react';
import {TabNavigator} from 'react-navigation';
import EventScreen from "../tabs/EventTab";
import NkoScreen from "../tabs/NkoTab";

const EventNavigator = TabNavigator({
    TabEvent: {screen: EventScreen},
    TabNko: {screen: NkoScreen},
}, {
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        indicatorStyle: {
            borderBottomColor: '#f2b630',
            borderBottomWidth: 2,
        },
        labelStyle: {
            fontFamily: 'sans-serif-medium',
            fontSize: 14,
            paddingTop: 0,
        },
        style: {
            height: 48,
            backgroundColor: '#66a636',
        },
    }
});

export default EventNavigator;