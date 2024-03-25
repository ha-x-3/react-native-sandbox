import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator,
    Image, ScrollView, Linking } from "react-native";

export default function NewsDetail({route, navigation}) {

    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const { url } = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=e552bdb09af94b17b6af4968d1805c9e')
        .then((response) => response.json())
        .then((json) => setAllPostData(json.articles))
        .catch((error) => console.error(error))
        .finally(() => finishLoading(false));
    }, []);

    const handleReadMore = () => {
        Linking.openURL(selectedPost.url);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
            {dataLoading ? <ActivityIndicator /> : (
                <ScrollView bounces={false} style={{ flex: 1 }}>
                    <Text style={styles.title}>{selectedPost.title}</Text>
                    <Image 
                        style={styles.storyImage}
                        source={{ uri: selectedPost.urlToImage }}
                    />
                    <Text style={styles.blurb}>{selectedPost.description}</Text>
                    <Text style={styles.content}>{selectedPost.content}</Text>
                    <TouchableOpacity style={styles.readMoreButton} onPress={handleReadMore}>
                        <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '100%'
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'OpenSans-Bold',
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        padding: 20
    },
    storyImage: {
        height: 300,
        width: '100%'
    },
    blurb: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 14,
        padding: 20,
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20
    },
    readMoreButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        alignSelf: 'center'
    },
    readMoreText: {
        color: 'white',
        fontWeight: 'bold'
    }
});