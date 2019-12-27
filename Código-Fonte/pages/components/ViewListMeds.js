import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import { withNavigation } from 'react-navigation';

class ViewListMeds extends Component{



    constructor(props){
        super(props);

        this.state = {
            medsList: this.props.data
        }

    }

    render(){
        return(
            <View style={styles.areaMeds}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ListInteracoes', {medName: this.state.medsList.medicamento})}>

                <Image 
                    resizeMode="contain"
                    style={styles.medPhoto} 
                    source={{uri: this.state.medsList.medicamento.toLowerCase()}} />

                <View style={styles.medInfos}>
                    <View style={styles.styleMedName}>
                        <Image style={styles.medIcon} source={require('./icons/medicine.png')}/>
                        <Text style={styles.medName}>{this.state.medsList.medicamento}</Text>
                    </View>
                    
                    <Text style={styles.medDescription}>{this.state.medsList.descricao}</Text>

                </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaMeds: {
        marginBottom: 13,
        backgroundColor: '#FFFFFF',
    },
    medPhoto: {
        flex: 1,
        height: 250,
        alignItems: 'center',
        margin: 13
    },
    medInfos: {
        backgroundColor: 'white',
        marginBottom: 5,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 8
    },
    medName: {
        fontSize: 19,
        marginLeft: 7,
        fontWeight: 'bold'
    },
    medDescription: {
        fontSize: 11,
        textAlign: 'justify',
        color: '#A9A9A9'
    },
    styleMedName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    medIcon: {
        width: 23,
        height: 23
    }
});

export default withNavigation(ViewListMeds);