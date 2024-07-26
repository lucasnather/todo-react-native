import { Image, Text, View } from "react-native";
import ClipBoard from '../../assets/clipboard.png'
import { style } from "./style";

export function ListEmpty() {
    return (
        <View style={style.container}>
            <View style={style.containerContent}>
                <Image source={ClipBoard} alt="Agenda" />

                <Text style={style.text}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={style.text}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}