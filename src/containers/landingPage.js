import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Text, Image,TouchableHighlight } from 'react-native'
import ButtonMenu from '../components/btnMenu'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        margin:3,
        height:5
      },
})
class Home extends Component {

    render () {
        console.log('landing')
        return (
            <View style={styles.container}>
                <ButtonMenu 
                press={this.props.navigation}
                target={'Page1'}
                text={'Button1'}
                />
                <ButtonMenu 
                press={this.props.navigation}
                target={'Page2'}
                text={'Button2'}
                />
                <ButtonMenu 
                press={this.props.navigation}
                target={'Page3'}
                text={'Button3'}
                />
                
            </View>
        )
    }
}

export default Home