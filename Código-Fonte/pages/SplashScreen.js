import React, {Component} from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

import { NavigationActions } from 'react-navigation'


export default class SplashScreen extends Component{

    constructor(props){
        super(props);
        
        setTimeout(() => {
            this.props.navigation.replace ('ListMeds');
        }, 1500);
    }

    render(){
        return(
            <View style={styles.viewPrincipal}>
                <Image style={styles.logo} source={require("../logo/logo.png")} />
            </View>
        )
    };

}

const styles = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#c8ddde'
    }, 
    logo: {
        height: 255,
        width: 255,
        alignSelf: 'center'
    }
});