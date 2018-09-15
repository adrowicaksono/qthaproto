import React, {Component} from 'react'
import {View, Text, CameraRoll, TouchableHighlight, ScrollView, ActivityIndicator,Image, Dimensions, StyleSheet } from 'react-native'

let styles
const { width } = Dimensions.get('window')

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos : '',
            loading : true,
            error : ''
        }
    }
   
    componentDidMount() {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'All',
          })
          .then(data => {
              console.log('hai', data, 'lllll')
            this.setState({ 
                photos: data.edges,
                loading: false
            });
          })
          .catch((err) => {
              this.setState({ error:err
            })
            console.log(err)
          });
    }

    imageShow = () => {
        if(this.state.loading){
            return (
                <View style={[styles.container, styles.horizontal]}>     
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
                )
        }else {
            return (
                <ScrollView
                contentContainerStyle={styles.scrollView}>
                    {
                        this.state.photos.map((p, i) => {
                        return (
                            <TouchableHighlight
                            style={{opacity: i === this.state.index ? 0.5 : 1}}
                            key={i}
                            underlayColor='transparent'
                            
                            >
                            <Image
                                style={{
                                width: width/3,
                                height: width/3
                                }}
                                source={{uri: p.node.image.uri}}
                            />
                            </TouchableHighlight>
                        )
                        })
                    }
                </ScrollView>
            )
        }
    }

    render() {
      return (
        <View>
          {this.imageShow()}
        </View>
      );
     }
}

styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContainer: {
      paddingTop: 20,
      flex: 1
    },
    scrollView: {
      flexWrap: 'wrap',
      flexDirection: 'row'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginTop: 200
    }
  })




export default Page