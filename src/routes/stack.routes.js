import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Welcome } from '../pages/Welcome';

import {TabRoute} from './tab.routes';
import { RegistrationPay } from '../pages/RegistrationPay';
import { NewPay } from '../pages/NewPay';

export const StackRoute = () =>{

    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Main' component={TabRoute}/>
            <Stack.Screen name='NewPay' component={NewPay}/>
            <Stack.Screen name='RegistrationPay' component={RegistrationPay}/>
        </Stack.Navigator>
    )
}