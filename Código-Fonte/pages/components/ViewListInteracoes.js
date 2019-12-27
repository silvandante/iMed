import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native';

import { Dimensions } from 'react-native'

import { withNavigation } from 'react-navigation';


import Modal_ from './Modal';

class ViewListMeds extends Component{

    

    constructor(props){
        super(props);

        this.state = {
            medsIntList: this.props.data,
            modalVisible: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal(){
        let state = this.state;

        state.modalVisible = true;

        this.setState(state);

    }

    closeModal(){
        let state = this.state;

        state.modalVisible = false;

        this.setState(state);

    }

    render(){


        return(
            <View style={styles.areaMeds}>
                <TouchableOpacity onPress={this.openModal}>
                    <View style ={styles.imageContainer}>
                        <Image resizeMode='contain'
                                style ={{width: Dimensions.get('window').width/2, height: 80, marginTop: 11, marginBottom: 11}}
                                source={{uri: this.state.medsIntList.medicamento_a.toLowerCase()}}/>

                        <Image resizeMode='contain'
                                style style={{width: Dimensions.get('window').width/2, height: 80, marginTop: 11, marginBottom: 11}}
                                source={{uri: this.state.medsIntList.medicamento_b.toLowerCase()}}/>
                    </View>

                    
                    <View style={styles.iconTextContainer}>
                        {//* colocar em maisculo
                        }
                        <Image style={styles.drugsIcon} source={require('./icons/drugs.png')}/>
                        <Text style={styles.medName}>{this.state.medsIntList.medicamento_a} + {this.state.medsIntList.medicamento_b}</Text>
                    </View>

                    <View style={styles.iconTextContainer}>
                        <Image style={styles.riskIcon} source={require('./icons/risk.png')}/>
                        <Text style={styles.riskText}>{this.state.medsIntList.risco}</Text>
                    </View>

                    <View style={styles.iconTextContainerLast}>
                        <Image style={styles.riskIcon} source={require('./icons/warning.png')}/>
                        <Text style={styles.effects}>{this.state.medsIntList.efeitos}</Text>
                    </View>

                    <Modal visible={this.state.modalVisible} animationType="slide" transparent={false} onPress={this.closeModal}>
                        <Modal_ close={() => this.closeModal()} data={this.state.medsIntList}/>
                    </Modal>
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
        width: 275,
    }
});

export default withNavigation(ViewListMeds);