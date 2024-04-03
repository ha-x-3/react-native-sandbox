import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity,
	Platform,
	ActivityIndicator,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const BlogItem = ({ id, postTitle, postAuthor, postImage }) => {
	const router = useRouter();

	return (
		<TouchableOpacity
			onPress={() => {
				router.push({
					pathname: '/BlogPost',
					params: { selectedPost: id },
				});
			}}
		>
			<View style={styles.blogPost}>
				<Image
					style={styles.blImage}
					source={{ uri: postImage }}
				/>
				<Text style={styles.blTitle}>{postTitle}</Text>
				<Text style={styles.blAuthor}>{postAuthor}</Text>
			</View>
		</TouchableOpacity>
	);
};

const Blog = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getPosts = async () => {
		try {
			const response = await fetch('http://192.168.0.218:3000/posts');
			const allPosts = await response.json();
			//console.log(allPosts);
			setBlogPosts(allPosts);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getPosts();
		//console.log(blogPosts);
	}, []);

	if (isLoading) {
		return <ActivityIndicator />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>BPS Blog</Text>
			<FlatList
				data={blogPosts}
				renderItem={({ item }) => <BlogItem {...item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	blogPost: {
		...Platform.select({
			android: {
				borderTopWidth: 1,
			},
			ios: {
				borderTopWidth: 1,
			},
		}),
	},
	blImage: {
		...Platform.select({
			android: {
				width: '100%',
				height: 220,
			},
			ios: {
				width: '100%',
				height: 220,
			},
			default: {
				width: '70%',
				height: 450,
				alignSelf: 'center',
			},
		}),
	},
	blTitle: {
		textAlign: 'center',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
		...Platform.select({
			android: {
				fontSize: 18,
				paddingTop: 20,
			},
			ios: {
				fontSize: 18,
				paddingTop: 20,
			},
			default: {
				fontSize: 24,
				paddingTop: 30,
			},
		}),
	},
	blAuthor: {
		textAlign: 'center',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '400',
		...Platform.select({
			android: {
				fontSize: 16,
				paddingTop: 10,
				paddingBottom: 20,
				paddingHorizontal: 30,
			},
			ios: {
				fontSize: 16,
				paddingTop: 10,
				paddingBottom: 20,
				paddingHorizontal: 30,
			},
			default: {
				textAlign: 'center',
				fontSize: 20,
				paddingTop: 15,
				paddingBottom: 60,
			},
		}),
	},
	container: {
		backgroundColor: '#ffcec7',
		paddingBottom: 290,
	},
	pageTitle: {
		textAlign: 'center',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '800',
		...Platform.select({
			android: {
				fontSize: 26,
				paddingBottom: 10,
			},
			ios: {
				fontSize: 26,
				paddingBottom: 10,
			},
			default: {
				fontSize: 32,
				paddingBottom: 20,
			},
		}),
	},
});

export default Blog;