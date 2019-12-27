import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';


import { Dimensions } from 'react-native'

export default class Modal_ extends Component{

    constructor(props){
        super(props);

        this.state = {
            medsInt: this.props.data,
        }
    }

    render(){
        return(
           
            <View style={styles.areaMeds} >
           
            <View style={styles.modalArea}>
                <View style ={styles.imageContainer}>
                    <Image resizeMode='contain'
                            style ={{width: Dimensions.get('window').width/2, height: 80, marginTop: 11, marginBottom: 11}}
                            source={{uri: this.state.medsInt.medicamento_a.toLowerCase()}}/>

                    <Image resizeMode='contain'
                            style style={{width: Dimensions.get('window').width/2, height: 80, marginTop: 11, marginBottom: 11}}
                            source={{uri: this.state.medsInt.medicamento_b.toLowerCase()}}/>
                </View>

                <View style={styles.iconTextContainer}>
                    <Image style={styles.drugsIcon} source={require('./icons/drugs.png')}/>
                    <Text style={styles.medName}>{this.state.medsInt.medicamento_a} + {this.state.medsInt.medicamento_b}</Text>
                </View>

                <View style={styles.iconTextContainer}>
                    <Image style={styles.riskIcon} source={require('./icons/risk.png')}/>
                    <Text style={styles.riskText}>{this.state.medsInt.risco}</Text>
                </View>

                <View style={styles.iconTextContainerLast}>
                    <Image style={styles.riskIcon} source={require('./icons/warning.png')}/>
                    <Text style={styles.effects}>{this.state.medsInt.efeitos}</Text>
                </View>

                <Button color='#2ea5ab' onPress={this.props.close} title="FECHAR"/>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    areaMeds: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    medPhoto: {
        height: 110
    },
    medName: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 11
    },
    riskText: {
        fontSize: 11,
        marginLeft: 11
    }, 
    effects: {
        fontSize: 11,
        textAlign: 'justify',
        color: '#A9A9A9',
        marginLeft: 13
    },
    iconTextContainer: {
        marginTop: 9,
        marginBottom: 4,
        marginLeft: 13,
        flexDirection: 'row',
        alignItems: 'center'
    },
    drugsIcon: {
        height: 17,
        width: 17
    },
    riskIcon: {
        height: 18,
        width: 18
    },
    iconTextContainerLast: {
        marginTop: 9,
        marginBottom: 12,
        marginLeft: 13,
        flexDirection: 'row',
        alignItems: 'center',
        width: 275
    },
    modalArea: {
        backgroundColor: 'white',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 9
    }
});
