import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator,
    Image, ScrollView, Linking } from "react-native";
import { WebView } from 'react-native-webview'

export default function NewsDetail({route, navigation}) {

    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const [showWebView, setShowWebView] = useState(false);
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

    const handleWebViewToggle = () => {
        setShowWebView(!showWebView);
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
                <ScrollView bounces={false}>
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
                    <TouchableOpacity style={styles.webViewButton} onPress={handleWebViewToggle}>
                        <Text style={styles.webViewText}>{showWebView ? 'Hide WebView' : 'Show WebView'}</Text>
                    </TouchableOpacity>
                    {showWebView && (
                        <WebView
                            source={{ uri: selectedPost.url }}
                            style={styles.webView}
                        />
                    )}
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
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    },
    title: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20
    },
    storyImage: {
        height: 300,
        width: '100%'
    },
    blurb: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        padding: 20,
        fontStyle: 'italic'
    },
    content: {
        flex: 1,
        fontFamily: 'OpenSans',
        fontSize: 16,
        paddingTop: 30,
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
    },
    webViewButton: {
        backgroundColor: 'green',
        padding: 10,
        marginVertical: 10,
        alignSelf: 'center'
    },
    webViewText: {
        color: 'white',
        fontWeight: 'bold'
    },
    webView: {
        flex: 1,
        width: '100%',
        height: 300
    }
});