import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import { IconButton } from "react-native-paper";
import { useState } from 'react';

console.log(Date.now().toString());
const TodoScreen = () => {
    //init-local-states
    const [todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);
    const[editedTodo, setEditedTodo] = useState(null);
    //Handle add Todo
    const handleAddTodo = () => {
       setTodoList([...todoList, {id: Date.now().toString(), title: todo}])
       setTodo("");
    };
    //Handle Delete
    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo)=> todo.id !==id)

    
       setTodoList(updatedTodoList);
    };
    //Handle edit todo
    const handleEditTodo = (todo)=> {
        setEditedTodo(todo);
        setTodo(todo.title);
    }
     // Handle Update

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };
    //Render todo
    const renderTodos = ({ item, index }) => {
        return (
            <View style={{backgroundColor: "#1e98ff",
                          borderRadius: 6, 
                          paddingHorizontal: 6,
                          paddingVertical: 12,
                          marginBottom: 12,
                          flexDirection: "row",
                          alignItems: "center",
                          shadowColor: "#000",
                          shadowOffset: {width: 0, height: 2},
                          shadowOpacity: 0.8,
                          shadowRadius: 3,
                          elevation:1,
                          
                          }}>
                       
             <Text style={{color:"#fff", 
                            fontsize: 20, 
                            fontWeight: "800", flex: 1}}>{item.title}
                        </Text> 
                        <IconButton icon="pencil" iconColor='#ffff' 
                        onPress={()=>handleEditTodo(item)}/>
                        <IconButton icon="trash-can"iconColor='#ffff' 
                        onPress={()=>handleDeleteTodo(item.id)}/>             
            </View>
        );
    };
    
  return (
    <View style = {{marginHorizontal: 16, marginTop: 35
     }}>
      <TextInput
      style={{
      borderWidth: 2, 
      borderColor: "le90ff",
      borderRadius: 6,
      paddingVertical: 12,
      paddingHorizontal: 16,

      }}
      placeholder='Add a task' 
      value={todo}
      onChangeText={(userText) => setTodo(userText)}
      />

    {
        editedTodo ?   (    
        <TouchableOpacity
        style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
         
        }}
        onPress = {() => handleUpdateTodo()}
        >
            <Text style={{color:"#fff", fontWeight: "bold"}}>Save</Text>
        </TouchableOpacity>
        ): (
        <TouchableOpacity
        style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 8,
            marginVertical: 34,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
         
        }}
        onPress = {() => handleAddTodo()}
        >
            <Text style={{color:"#fff", fontWeight: "bold"}}>Add</Text>
        </TouchableOpacity>
        )}

        <FlatList data = {todoList} renderItem={renderTodos}/>
    </View>
  );
};

export default TodoScreen

const styles = StyleSheet.create({})