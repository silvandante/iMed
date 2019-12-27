import React, {Component} from 'react';

import {
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';

import ViewListInteracoes from './components/ViewListInteracoes'

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'MED_INTERACOES_V4.db', createFromLocation : 1 });

export default class ListInteracoes extends Component {

  static navigationOptions = ({navigation}) => {
      
      return{
          title: "Interações de " + navigation.getParam('medName', '-'),
          headerStyle: {
            //1b5254
            backgroundColor: '#2ea5ab',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          }
      }
  }


    constructor(props){
        super(props);

        this.state = {
            medName: this.props.navigation.getParam('medName', '-'),
            FlatListItems: []
        }
        
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM med_inter WHERE medicamento_a='"+this.state.medName+"' OR medicamento_b='"+this.state.medName+"'", [], (tx, results) => {
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
            <View style={styles.container} >

                <FlatList 
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.FlatListItems} 
                    renderItem={({ item }) => 
                        <ViewListInteracoes data={ item }/>}
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