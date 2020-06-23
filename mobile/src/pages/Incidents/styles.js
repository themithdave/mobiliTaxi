import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#ecbd23',
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        color: '#000',

    },

    headerTextBold: {
        fontWeight: 'bold' 
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    subTitle: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 24,
        color: '#000'
    },

    incidentList: {
        marginTop:32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,

    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#2860EF',
        fontSize: 15,
        fontWeight: 'bold'
    },
    action: {
        backgroundColor: '#2860EF',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    actionUf: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
    },

    actionTextUf: {
        color: '#2860EF',
        fontSize: 15,
        fontWeight: 'bold',
        
    },
    
});