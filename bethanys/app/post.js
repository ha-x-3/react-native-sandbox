import {
    StyleSheet,
    Text,
    View, 
    Image, 
    ScrollView
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import news from './newsDB';

const Post = () => {
    const router = useRouter();
    const { selectedPost } = useLocalSearchParams();
    const currentPost = news.find(posts => posts.storyId === selectedPost);
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titleRow}>
                    <Text style={styles.postTitle}>{currentPost.title}</Text>  
                </View>
                <View style={styles.imageRow}>
                    <Image 
                        source={currentPost.newsImage} 
                        style={styles.postImage} 
                    />  
                </View>

                <View style={styles.contentRow}>
                    <Text style={styles.content}>{currentPost.story}</Text>
                </View>
                <Text 
                    style={styles.back}
                    onPress={() => {
                        router.back();
                    }}
                >
                    GO BACK
                </Text>

            </ScrollView>    
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 13,
    },
    titleRow: {
        flex: 10
    },
    postTitle: {
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 5
    },
    imageRow: {
        flex: 4
    },
    postImage: {
        height: 400,
        width: '100%'
    },
    contentRow: {
        flex: 2
    },
    content:{
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 14,
        paddingLeft: 5,
        paddingTop: 10
    },
    back:{
        paddingTop: 80,
        paddingBottom: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular',
        textDecorationLine: 'underline'
    }    
});

export default Post;