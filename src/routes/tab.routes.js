import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Main } from '../pages/Main';
import { Extract } from '../pages/Extract';
import { NewPay } from '../pages/NewPay';

import theme from '../styles/theme';

import IconHouseTab from '../assets/IconHouseTab.svg';
import IconHouseTabActived from '../assets/IconHouseTabActived.svg';

import IconExtractsTab from '../assets/IconExtractsTab.svg';
import IconExtractsTabActived from '../assets/IconExtractsTabActived.svg';

import IconNewPay from '../assets/IconNewPay.svg';

import { View } from 'react-native';



export const TabRoute = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.primary,
            tabBarStyle: {
                backgroundColor: theme.colors.background,
                height: 70,
                borderTopColor:theme.colors.background,
                paddingTop:'4%',

            },
        }}>


            <Tab.Screen name=' ' component={Main} options={{
                tabBarIcon: ({ color, focused, size }) => (
                    focused ? <IconHouseTabActived /> : <IconHouseTab />
                )
            }} />

            <Tab.Screen name='   ' component={NewPay} options={{
                tabBarIcon: ({ color, focused, size }) => (
                    <View style={{
                        height: 56,
                        width: 56,
                        backgroundColor: theme.colors.primary,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <IconNewPay />
                    </View>
                )
            }} />


            <Tab.Screen name='  ' component={Extract} options={{
                tabBarIcon: ({ color, focused, size }) => (
                    focused ? <IconExtractsTabActived /> : <IconExtractsTab />
                )
            }} />


        </Tab.Navigator>
    )
}