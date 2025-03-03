import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';



const Stack = createStackNavigator()

const AppNavigator = ()=> {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen  name='Home' component={Home} />
                <Stack.Screen  name='ReviewDetails' component={ReviewDetails} />

                <Stack.Screen  name='About' component={About} />


            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigator;