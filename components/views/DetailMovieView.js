import React, { useEffect, useState} from 'react'
import { TextInput, View } from 'react-native'

function DetailMovieView(props){
    
    useEffect(() => console.log(props), [])
    return(
        <View>
            <TextInput>Detail Movie View</TextInput>
        </View>
    )
}

export default DetailMovieView