import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { render } from 'react-dom';


export default class App extends React.Component {
  state={
    text:"",
    todo: []
  }
  
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text:""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo:arr});
  
  }
  renderTodos = () =>{
    return this.state.todo.map(t => {
      return (<Text style={styles.list}
          onPress={() => {this.deleteTodo(t)}}
         key={t}  > {t}  
     </Text>)
    })
  }
  render(){
  
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Plan Your day </Text>
          <TextInput 
              style={styles.input}
              placeholder="Enter Goals"
              onChangeText={(text)=>this.setState({text})}
              value={this.state.text}
          />
      <Button fontSize="20" 
      style={styles.addtodobutton}
      title="Add To List"
      onPress={this.addTodo}
      />
      {this.renderTodos()}
    </View>
  )
  }
} 

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#7986cb',
   alignItems: 'center',
    padding:40,
  
  //justifyContent: 'center',
  },
  input:{
    height:40,
    margin:10,
    borderWidth:1,
    borderColor:'white',
    paddingHorizontal:20,
   // backgroundColor:'white'
     },
      heading:{
     color:"#ffff",
     fontSize:20,
     fontWeight:'bold'
   },
   list:{
     width :'90%',
     marginVertical:10,
     fontSize:30,
     padding:5,
     color:'white' },

  
});
