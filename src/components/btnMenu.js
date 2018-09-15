import React, { Component, Fragment } from 'react'
import {StyleSheet,Image, Text, View, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        margin:10
    },
    img : {
        width : 150,
        height : 40,
    },
    text : {
       position:'absolute', 
    //    marginBottom : 100
    }
})

// class Menu extends Component {
    const Menu = (props) => {
        return (
            <TouchableHighlight style={styles.container} onPress={() => {props.press.navigate(props.target)}}>
                <Fragment>
                    <Image style={styles.img} source={require('../img/btn.png')}/>
                    <Text style={styles.text}>{props.text}</Text>
                </Fragment>
            </TouchableHighlight>
        )
    }
// }

export default Menu