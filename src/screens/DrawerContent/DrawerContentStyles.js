import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center'
    },
    userInfoContainer: {
        flexDirection: 'row'
    },
    tabTop: {
        width: '70%',
        height: 3,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000000',
        marginTop: 10,
        marginBottom: 10
    },
    userName: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10
    },
    userPoints: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#14fcf5'
    },
    userInfo: {
        height: 600,
        padding: 20,
        backgroundColor: '#2c2c2fAA',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.4,
    },
    restaurants:{
        padding: 10,
        width: '100%',
        height: '100%',
        borderColor: '#C4C4C4',
        elevation: 1,
        borderWidth: 0.5,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 20
    }
})