import React, {Component} from 'react';

import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';

import ViewListMeds from './components/ViewListMeds'

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'MED_INTERACOES_V4.db', createFromLocation : 1 });

export default class ListMeds extends Component {

  static navigationOptions = {
    title: 'Medicações',
    headerStyle: {
      //1b5254
      backgroundColor: '#1b5254',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
    headerLeft: null,
    headerRight: (
      <TouchableOpacity style={{marginRight: 9}} onPress={() => {
        Alert.alert(
          'Sobre o APP',
          'Dados pertencem a Karen Lima\nkarenmylla@hotmail.com.\n\nDesenvolvedora: Anny Walker\nannyufrr@gmail.com', // <- this part is optional, you can pass an empty string
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }}>
        <Text style={{color: 'white'}}>Sobre</Text>
      </TouchableOpacity>
    ),
  };

    constructor(props){
        super(props);

        this.state = {
            FlatListItems : [],
            result: ''
        }

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM meds', [], (tx, results) => {
              var temp = [];

              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }

              this.setState({
                FlatListItems: temp
              });

            });
        });

    }

    render(){
        return(
            <View style={styles.container}>

                <FlatList 
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.FlatListItems} 
                    renderItem={({ item }) => 
                        <ViewListMeds data={ item } navigation={this.props.navigation}/>}
                    />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3'
    }
});