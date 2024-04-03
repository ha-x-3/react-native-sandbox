import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Dimensions,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';

const boundedHeight = Dimensions.get('window').height;

const BlogPost = () => {
	const router = useRouter();
	const { selectedPost } = useLocalSearchParams();
	const [post, loadPost] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getPost = async () => {
		try {
			const response = await fetch(
				`http://192.168.0.25:3000/posts/${selectedPost}`
			);
			const singlePost = await response.json();
			loadPost(singlePost);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	if (isLoading) {
		return <ActivityIndicator />;
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Image
					source={{ uri: post.postImage }}
					style={styles.blImage}
				/>
				<Text style={styles.blTitle}>{post.postTitle}</Text>
				<Text style={styles.blContent}>{post.postContent}</Text>
				<Text
					style={styles.blBack}
					onPress={() => {
						router.back();
					}}
				>
					GO BACK TO BLOG
				</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: boundedHeight,
		...Platform.select({
			android: {
				paddingBottom: 170,
			},
			ios: {},
			default: {
				paddingTop: 20,
			},
		}),
	},
	scrollContainer: {
		alignItems: 'center',
	},
	blImage: {
		width: '100%',
		...Platform.select({
			android: {
				height: 200,
			},
			ios: {
				height: 200,
			},
			default: {
				height: 500,
				resizeMode: 'contain',
			},
		}),
	},
	blTitle: {
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
		...Platform.select({
			android: {
				fontSize: 18,
				paddingTop: 10,
			},
			ios: {
				fontSize: 18,
				paddingTop: 10,
			},
			default: {
				fontSize: 24,
				paddingTop: 20,
			},
		}),
	},
	blContent: {
		textAlign: 'justify',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '400',
		...Platform.select({
			android: {
				fontSize: 16,
				paddingTop: 10,
				paddingHorizontal: 50,
			},
			ios: {
				fontSize: 16,
				paddingTop: 10,
				paddingHorizontal: 50,
			},
			default: {
				fontSize: 20,
				paddingTop: 15,
				paddingHorizontal: 300,
			},
		}),
	},
	blBack: {
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
		...Platform.select({
			android: {
				fontSize: 20,
				paddingTop: 20,
			},
			ios: {
				fontSize: 16,
				paddingTop: 20,
			},
			default: {
				fontSize: 26,
				paddingTop: 30,
			},
		}),
	},
});

export default BlogPost;
