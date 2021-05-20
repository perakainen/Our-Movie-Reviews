import React, { useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableHighlight, FlatList } from 'react-native'
import * as firebase from 'firebase'
import * as Haptics from 'expo-haptics'

function MyReview({navigation}){

    const [myReviews, setMyReviews] = useState([])

    const currentRev = () => {
            firebase.database().ref('reviews/').once('value', snapshot => {
                if(snapshot.exists()){
                const data = snapshot.val()
                const review = Object.values(data)
                setMyReviews(review)
                }
                else{
                    setMyReviews([])
                }
            })
    }

    
    const removeItem = (id) => {
        firebase.database().ref('reviews/' + id).remove()
        currentRev()
    }

    const RenderFlatList = () => {

        if(!myReviews.length == 0){
    
            return (<View style={styles.itemWrapper}>
                        <View >
                            <FlatList 
                            
                            persistentScrollbar={true}
                            data={myReviews}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={myReviews}
    
                            renderItem={({ item }) => (
    
                                <TouchableHighlight onPress={() => navigation.navigate('DetailMovieView', {item})} onLongPress={() => {removeItem(item.imdbID); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}}>
    
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

    return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>
                        My Reviews
                    </Text>
                    <Text style={styles.instructs}>
                        Tap to open, press long to delete
                    </Text>
                </View>
                <RenderFlatList/>
            </View>)

}

const styles = StyleSheet.create({

    instructs:{
        textAlign: 'center',
        paddingBottom: 10,
    },
    header: {
        fontSize: 35,
        paddingBottom: 60,
        color: 'yellow',
    },
    container: {
        flex:1,
        paddingTop: 40,
        backgroundColor: '#9D2F11',
        alignItems: 'center',
        textAlign:'center',
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
        height: 200,
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