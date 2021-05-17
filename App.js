import * as React from 'react'
import Navigation from './navigation/navigation'
// import DetailMovieView from './components/views/DetailMovieView'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'


export default function App() {
  return(
        <Navigation/>
        );
}


  //const { Navigator, Screen} = createStackNavigator()

/* <NavigationContainer>
        <Navigator headerMode = 'none'>
            <Screen name='mainView' component={MainView} />
            <Screen name='detailMovieView' component={DetailMovieView} />
        </Navigator>
    </NavigationContainer> */

    