import React, { useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableHighlight, FlatList } from 'react-native'
import * as firebase from 'firebase'
import { render } from 'react-dom'

function MyReview({navigation}){

    const [myReviews, setMyReviews] = useState([])

    const currentRev = () => {
        
            firebase.database().ref('reviews/').on('value', snapshot => {
                
                const data = snapshot.val()
                const review = Object.values(data)
                console.log(review)
                setMyReviews(review)
            })
    }

    const RenderFlatList = () => {

        if(!myReviews.length == 0){
    
            return (<View style={styles.itemWrapper}>
                        <View >
                            <FlatList 
                            
                            persistentScrollbar={true}
                            data={myReviews}
                            keyExtractor={(item, index) => index.toString()}
    
                            renderItem={({ item }) => (
    
                                <TouchableHighlight onPress={() => navigation.navigate('DetailMovieView', {item}) }>
    
                                    <View>
                                        <Text style={styles.item}>
                                            {item.Title}
                                        </Text>
                                    </View>
    
                                </TouchableHighlight>
    
                                )}
                            />
                        </View>
    
                        <View style={styles.total}>
                            <Text>Total results: {myReviews.length}</Text>
                        </View>
    
                    </View>)
        }
        
        else {
            return (<Text>No Reviews Yet, start by searching your favorite movie!</Text>)
        }
        
    }

    useEffect(() => currentRev(), [])

    return(<View style={styles.container}><RenderFlatList/></View>)

}

const styles = StyleSheet.create({

    container: {
        flex:1,
        paddingTop: 40,
        backgroundColor: '#9D2F11',
        alignItems: 'center',
        justifyContent: 'center',
    },
    total: {
        backgroundColor: 'grey',
        color: 'red',
        paddingHorizontal: 140,
        paddingVertical: 5,
    },
    itemWrapper: {
        backgroundColor: '#FFB806',
        alignContent: 'center',
    },
    item: {
        padding: 20,
        color: 'black',
        borderWidth: 1,
        textAlign: 'center',
    },
    view: {
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 100,
        margin: 8,
        alignItems: 'center',
        backgroundColor: '#4E3100'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'yellow'
    },
    
  });

export default MyReview