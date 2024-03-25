import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,
     ActivityIndicator, FlatList, Image, TouchableWithoutFeedback } from "react-native";

export default function Homepage({navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=e552bdb09af94b17b6af4968d1805c9e')
        .then((response) => response.json())
        .then((json) => setData(json.articles))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false))
    }, []);

    const storyItem = ({item}) => {
        //Check for removed stories and don't display
        if(item.url.startsWith('https://removed.com')) {
            return null
        }

        return (
            <TouchableWithoutFeedback
                onPress={() => 
                    navigation.navigate('NewsDetail', {url: item.url})
                }
            >
                <View style={styles.listings}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image 
                        style={styles.thumbnail}
                        source={{uri: item.urlToImage}}
                    />
                    <Text style={styles.blurb}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };

    return (
        <View style={styles.container}>
            {dataLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={newsData}
                    renderItem={storyItem}
                    keyExtractor={(item, index) => `${index}-${item.url}`} //Added index to resolve error for removed articles
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
        height: 100,
        width: '98%'
    },
    listings: {
        paddingTop: 15,
        paddingBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        paddingBottom: 10,
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        textAlign: 'center'
    },
    blurb: {
        fontFamily: 'OpenSans-Italic',
    }
});