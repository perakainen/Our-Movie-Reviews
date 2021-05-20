import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainView from '../views/MainView'
import DetailMovieView from '../views/DetailMovieView'
import ListOfMovies from '../components/ListOfMovies'
import MyReviews from '../views/MyReviews'

const {Navigator, Screen} = createStackNavigator()

const MainViewScreen = () => (
    <Navigator>
        <Screen name='MainView' 
        component={MainView}
        options={{
            headerShown: false
        }}
        />
        <Screen 
        name='DetailMovieView' 
        component={DetailMovieView}
        options={({route}) => ({title: route.params.item.Title})}
        />
        <Screen 
        name='ListOfMovies' 
        component={ListOfMovies}
        />
        <Screen 
        name='MyReviews' 
        component={MyReviews}
        />
    </Navigator>
)

export default () => (
    <NavigationContainer>
        <MainViewScreen/>
    </NavigationContainer>
)