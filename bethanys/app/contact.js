import { useState } from "react";
import { StyleSheet,
        Text,
        View,
        Image,
        TextInput,
        TouchableOpacity,
        Alert,
        ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

const Contact = () => {

    const [name, onChangeName] = useState(''); 
    const [email, onChangeEmail] = useState('');
    const [phone, onChangePhone] = useState('');
    const [message, onChangeMessage] = useState('');
    const [phoneCheck, setCheckedPhone] = useState('');
    const hero = require('../assets/images/shutterstock_1192661812.jpg');
    const router = useRouter();

    async function saveMessage(phone, message) {
        await SecureStore.setItemAsync(phone, message);
        Alert.alert(phone, message);
        router.back();
    };

    async function getMessage(phoneCheck) {
        let result = await SecureStore.getItemAsync(phoneCheck);
        if (result) {
            Alert.alert(phoneCheck, result);
            router.back();
        } else {
            Alert.alert(phoneCheck, "No message saved under this number.");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={hero} style={styles.contactImage} />
            <ScrollView contentContainerStyle={styles.contactView}>
                <Text style={styles.title}>Leave a message for us</Text>
                <Text style={styles.label}>Name</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    inputMode="email"
                /> 
                <Text style={styles.label}>Phone</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangePhone}
                    value={phone}
                    inputMode="tel"
                /> 
                <Text style={styles.label}>Message</Text>
                <TextInput 
                    style={styles.messageInput}
                    onChangeText={onChangeMessage}
                    value={message}
                    multiline={true}
                    numberOfLines={7}
                    textAlignVertical="top"
                /> 
                <TouchableOpacity
                    onPress={() => {
                        saveMessage(phone, message);
                    }}
                    style={styles.messageButton}
                >
                    <Text style={styles.buttonLabel}>Send Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.back();
                    }}
                    style={styles.cancel}
                >
                    <Text style={styles.buttonLabel}>Cancel</Text>
                </TouchableOpacity>
                
                <Text style={styles.checkMessage}>Check Message</Text>
                <Text style={styles.label}>Phone number to check</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCheckedPhone}
                    value={phoneCheck}
                    inputMode="tel" 
                />
                <TouchableOpacity
                    onPress={() => {
                        getMessage(phoneCheck);
                    }}
                    style={styles.messageButton}
                >
                    <Text style={styles.buttonLabel}>Check for Message</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 13
    },
    contactImage:{
        width: '100%',
        height: '30%'
    },
    contactView:{
        alignItems: 'center'
    },
    title: {
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10    
    },
    label: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 15,
        paddingTop: 15   
    },
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        padding: 10,
    },
    messageInput: {
        width: 250,
        borderWidth: 1,
        padding: 10,
    },
    messageButton: {
        backgroundColor: 'green',
        borderWidth: 1,
        marginBottom: 10,
    },
    cancel: {
        backgroundColor: 'red',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonLabel: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 14,
    },
    checkMessage: {
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 45    
    }
});

export default Contact;