import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#37474F",
        margin: 10,
        borderRadius: 20,
        height: "20%",
        padding: 10,

    },
    inputItem: {
        fontSize: 25,
        borderBottomWidth: 2,
        borderColor: "#808080",
        color: "white"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        margin: 20,
        marginTop: 12,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 15,
        backgroundColor: '#808080',
    },
    text: {
        fontSize: 25,
        color: 'white',
    },
    button_hover: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        margin: 20,
        marginTop: 12,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 15,
        backgroundColor: "#FFA500"
    }
})