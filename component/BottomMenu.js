import React from 'react';
import {TabNavigator} from 'react-navigation';
import News from "../tabmenu/News";
import Search from "../tabmenu/Search";
import Main from "../tabmenu/Main";
import History from "../tabmenu/History";
import Profile from "../tabmenu/Profile";

const MenuNavigator = TabNavigator({
    news: {screen: News},
    search: {screen: Search},
    main: {screen: Main},
    history: {screen: History},
    profile: {screen: Profile},
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        upperCaseLabel: false,
        activeTintColor: '#7db354',
        inactiveTintColor: 'grey',
        indicatorStyle: {
            opacity: 0
        },
        labelStyle: {
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontSize: 11,
        },
        style: {
            height: 54,
            backgroundColor: 'white',
        },
    }
});

export default MenuNavigator;