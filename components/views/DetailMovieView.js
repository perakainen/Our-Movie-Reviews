import React, { useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading'

function DetailMovieView(props){

    //Deconstruct item from props
    const {item} = props.route.params

    const [movieDetail, setMovieDetail] = useState({
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot:'',
        Language: '',
        Awards: '',
        Poster: '',
        Ratings: [],
        Metascore: '',
        imdbRating:'',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        DVD: '',
        BoxOffice: '',
        Production: '',
        Website: '',
        Response: '',
        Metascore: '',
    })

    const searchMovies = (querry) => {
        
        //Only for demo, as api-key is visible
        let querryString = `https://www.omdbapi.com/?i=${querry}&apikey=89e86f3e`
        fetch(querryString)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
        .catch(e => console.log(`Error while fetching: ${e}`))
    }

    useEffect(() => searchMovies(item.imdbID), [])
    //Dev log
    useEffect(() => console.log(movieDetail), [movieDetail])
    
    return(
            <ScrollView style={styles.container}>

                <View style={styles.centerView}>
                    <Text>
                        Title: {movieDetail.Title}
                    </Text>
                    <Text>
                        Year: {movieDetail.Year}
                    </Text>
                    <Text>
                        Rated: {movieDetail.Rated}
                    </Text>
                    <Text>
                        Released: {movieDetail.Released}
                    </Text>
                    <Text>
                        Runtime: {movieDetail.Runtime}
                    </Text>
                    <Text>
                        Genre: {movieDetail.Genre}
                    </Text>
                    <Text>
                        Director: {movieDetail.Director}
                    </Text>
                    <Text>
                        Writer: {movieDetail.Writer}
                    </Text>
                    <Text>
                        Actors: {movieDetail.Actors}
                    </Text>
                    <Text>
                        Plot: {movieDetail.Plot}
                    </Text>
                    <Text>
                        Language: {movieDetail.Language}
                    </Text>
                    <Text>
                        Country: {movieDetail.Country}
                    </Text>
                    <Text>
                        Awards: {movieDetail.Awards}
                    </Text>
                    <Text>
                        Metascore: {movieDetail.Metascore}
                    </Text>
                    <Text>
                        imdbRating: {movieDetail.imdbRating}
                    </Text>
                    <Text>
                        IMDB Votes: {movieDetail.imdbVotes}
                    </Text>
                    <Text>
                        IMDB ID: {movieDetail.imdbID}
                    </Text>
                    <Text>
                        Type: {movieDetail.Type}
                    </Text>
                    <Text>
                        DVD: {movieDetail.DVD}
                    </Text>
                    <Text>
                        Box Office: {movieDetail.BoxOffice}
                    </Text>
                    <Text>
                        Production: {movieDetail.Production}
                    </Text>
                    <Text>
                        Website: {movieDetail.Website}
                    </Text>
                    <Text>
                        Poster:
                    </Text>
                </View>
                    <View>
                        <Image style={styles.logo} source={{uri: movieDetail.Poster ? movieDetail.Poster : null}} />
                    </View>
                
            </ScrollView>
            )
}

const styles = StyleSheet.create({

    centerView: {
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 0.845
    },
    container: {
        flex:1,
        backgroundColor: '#9D2F11',
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

export default DetailMovieView