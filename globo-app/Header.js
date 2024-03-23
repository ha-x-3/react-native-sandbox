import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from './assets/images/globo-logo.png'

export default function Header(props) {

    return (
        <View style={styles.header}>
            <Image source={logo} style={{ width: 35, height: 35 }}/>
            <View>
                <Text style={styles.text}>{props.headerDisplay}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 70
    },
    text: {
        fontFamily: 'OpenSans'
    }
});