import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    modal:{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        width: '90%',
        height: '80%',
        marginTop: '15%',
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    icon:{
        marginLeft: '5%',
        marginTop: '5%',
    },
    content:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '90%',
        height: 180,
        borderRadius: 10,
    },
    load:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginTop: '5%',
    },
    text:{
        marginRight: '5%',
        textAlign: 'center',
        fontSize: 18,
    },
    goToButton:{
        width: '90%',
        height: 50,
        marginTop: '5%',
        marginBottom: '5%',
        borderRadius: 10,
        justifyContent: "center",
        alignSelf: 'center',
    },
    goToButtonText:{
        alignSelf: 'center',
        fontSize: 22,
        color: "#FFF",
        marginRight: '5%',
    },
    goToButtonView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})