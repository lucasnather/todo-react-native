import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        marginHorizontal: 'auto'
    },
    containerInputButton: {
        marginTop: -31,
        marginBottom: 32,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        marginRight: 4,
        height: 54,
        padding: 16,
        borderRadius: 6,
        backgroundColor: "#262626",
        color: "#F2F2F2"
    },
    button: {
        height: 52,
        width: 52,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1E6F9F",
    },
    containerCriadasCloncluidas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerCriadasCloncluidasContent: {
        flexDirection: 'row'
    },
    created: {
        color: "#4EA8DE"
    },
    concluidas: {
        color: "#8284FA"
    },
    containerAmount: {
        width: 25,
        height: 19,
        borderRadius: 1000,
        alignItems: 'center',
        backgroundColor: "#333333",
    },
    amount: {
        color: "#D9D9D9",
    },
    containerTasks: {
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        
    },
    buttonCheckbox: {
        padding: 12
    },
    checkbox: {
        borderRadius: 1000,
    },
    task: {
        color: "#F2F2F2"
    }
})