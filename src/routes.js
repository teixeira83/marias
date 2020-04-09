import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Produtos from './pages/Produtos';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions= {{ headerShown: false }}>
                <AppStack.Screen name="Produtos" component={Produtos}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
