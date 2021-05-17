import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainView from '../components/views/MainView'
import DetailMovieView from '../components/views/DetailMovieView'
import ListOfMovies from '../components/ListOfMovies'

const {Navigator, Screen} = createStackNavigator()

const MainViewScreen = () => (
    <Navigator>
        <Screen name='MainView' component={MainView}/>
        <Screen name='DetailMovieView' component={DetailMovieView}/>
        <Screen name='ListOfMovies' component={ListOfMovies}/>
    </Navigator>
)

export default () => (
    <NavigationContainer>
        <MainViewScreen/>
    </NavigationContainer>
)