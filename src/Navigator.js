import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { Text } from 'react-native'
import Vogal from './screens/Vogal'
import Maiusculo from './screens/Maiusculo'
import Asterisco from './screens/Asterisco'

const MenuRoutes = {
    Vogal: {
        name: 'Vogal',
        screen: Vogal,
        navigationOptions: {
            title: 'Vogal',
            tabBarIcon: () => <Text>V</Text>
        }
    },
    Maiusculo: {
        name: 'Maiusculo',
        screen: Maiusculo,
        navigationOptions: {
            title: 'Maiusculo',
            tabBarIcon: () => <Text>M</Text>
        }
    },
    Asterisco: {
        name: 'Asterisco',
        screen: Asterisco,
        navigationOptions: {
            title: 'Asterisco',
            tabBarIcon: () => <Text>A</Text>
        }
    },
}
const MenuConfig = {
    initialRouteName: 'Vogal',
    tabBarOptions: {
        showLabel: true,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)


export default createAppContainer(MenuNavigator)