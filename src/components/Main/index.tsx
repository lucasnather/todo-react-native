import PlusIcon from '../../assets/plus.png'
import Checkbox from "expo-checkbox";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { ListEmpty } from "../ListEmpty";
import { Trash } from 'phosphor-react-native'

type TaskProps = {
    name: string
    isMarked: boolean
}

export function Main() {
    const [tasks, setTask] = useState<string>("")
    const [listTasks, setListTasks] = useState<TaskProps[]>([])

    function onCreateTask(task: string) {

        if(task !== "") {
            setListTasks(prevState => [...prevState, {
                name: task,
                isMarked: false
            }])
            setTask("")
        }

    }

    function onRemoveTask(name: string) {
        const removeTask = listTasks.filter(task => task.name !== name)

        setListTasks(removeTask)

    }

    function handleMarkedTaskFinished(name: string) {
        setListTasks(prevItems =>
            prevItems.map((item) =>
              item.name === name ? { ...item, isMarked: !item.isMarked } : item
            )
          );
    }

    const tasksFinished = listTasks.filter(task => task.isMarked === true)

    return (
        <View style={styles.container}>
            <View style={styles.containerInputButton}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    value={tasks}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity style={styles.button} onPress={() => onCreateTask(tasks)}>
                    <Image source={PlusIcon} alt="Ícone para adicionar tarefa" />
                </TouchableOpacity>
            </View>

            <View style={styles.containerCriadasCloncluidas}>
                <View style={styles.containerCriadasCloncluidasContent}>
                    <Text style={styles.created}>Criadas </Text>
                    <View style={styles.containerAmount}>
                        <Text style={styles.amount}>{listTasks.length}</Text>
                    </View>

                </View>
                <View style={styles.containerCriadasCloncluidasContent}>
                    <Text style={styles.concluidas}>Concluídas </Text>
                    <View style={styles.containerAmount}>
                        <Text style={styles.amount}>{tasksFinished.length}</Text>
                    </View>
                </View>
            </View>

            <FlatList 
                data={listTasks}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return (
                        <>
                            <View style={styles.containerTasks}>
                               <TouchableOpacity onPress={() => handleMarkedTaskFinished(item.name)} style={styles.buttonCheckbox}>
                                    <Checkbox 
                                        style={styles.checkbox}
                                        value={item.isMarked}
                                        onValueChange={() => item.isMarked}
                                        color={item.isMarked ? '#8284FA' : '#4EA8DE'}
                                    />
                               </TouchableOpacity>

                                <Text style={styles.task}>
                                    {item.name}
                                </Text>

                                <TouchableOpacity onPress={() => onRemoveTask(item.name)}>
                                    <Trash color='#808080'  />
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return (
                        <ListEmpty />
                    )
                }}
            />
        </View>
    )
}