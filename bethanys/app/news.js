import { StyleSheet,
        Text,
        View, 
        FlatList, 
        Image, 
        TouchableOpacity 
    } from "react-native";
import { useRouter } from "expo-router";
import news from './newsDB';

const NewsList = () => {

    const router = useRouter();
    const Story = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: '/post', 
                        params: {selectedPost: item.storyId}
                    });
                }}
            >
                <View style={styles.posts}>
                    <View style={styles.titleRow}>
                        <Text style={styles.postTitle}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.imageRow}>
                        <Image 
                            style={styles.postImage}
                            source={item.newsImage}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <Text style={styles.postTitle}>LATEST NEWS</Text>
            <FlatList 
                data={news}
                renderItem={Story}
                keyExtractor={(item) => item.storyId}
            />
            <Text 
                style={styles.back}
                onPress={() => {
                    router.push('/');
                }}
            >
                GO HOME
            </Text>
        </View>
    )
};

styles = StyleSheet.create({
    container: {
        flex: 14
    },
    posts: {
        flex: 1,
        borderBottomWidth: 2
    },
    imageRow:{
        flex: 1
    },
    titleRow: {
        flex: 2,
        paddingTop: 5
    },
    postImage: {
        height: 250,
        width: '100%'
    },
    postTitle: {
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15
    },
    back:{
        paddingTop: 40,
        paddingBottom: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular',
        textDecorationLine: 'underline'
    }
});

export default NewsList;