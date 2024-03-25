import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import imageA from './assets/images/globo-img2.jpg';
import imageB from './assets/images/globo-img3.jpg';
import imageC from './assets/images/globo-img1.jpg';

const blockA = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const blockB = `
    Eget felis eget nunc lobortis. Urna cursus eget nunc scelerisque viverra mauris in. Et malesuada fames ac turpis egestas sed tempus. Adipiscing commodo elit at imperdiet. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Suscipit adipiscing bibendum est ultricies integer. Interdum consectetur libero id faucibus nisl tincidunt eget. Vitae tortor condimentum lacinia quis vel eros donec ac odio. In vitae turpis massa sed elementum. Dui faucibus in ornare quam viverra orci sagittis. Augue interdum velit euismod in pellentesque massa placerat duis. Massa tempor nec feugiat nisl. Euismod nisi porta lorem mollis aliquam ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget.
`;

export default function AboutGlobo() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300 }}/>
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>Leaders in our field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{ width: '100%', height: 400 }} />
                <Text style={styles.heading}>We are the Experts</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }, 
    heading: {
        fontFamily: 'OpenSans-Bold',
        paddingTop: 5
    },
    text: {
        fontFamily: 'OpenSans'
    }
});