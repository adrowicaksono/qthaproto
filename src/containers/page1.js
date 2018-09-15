import React, {Component} from 'react'
import {View, Text, CameraRoll, Button, ScrollView, Image} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker'
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos : ''
        }
    }
   
    getPhotos = () => {
       this.setState({ photos:JSON.stringify(CameraRoll)})
        // CameraRoll.getPhotos({
        //   first: 20,
        //   assetType: 'All'
        // })
        // .then(r => this.setState({ photos: r.edges }))
      }

    render () {
        return (
            <View>
                <Text> Page 1</Text>
                <Text>{JSON.stringify(this.state)}</Text>
                <View>
                    <Button title="Load Images" onPress={()=> this.getPhotos()} />
                    {/* <ScrollView>
                    {this.state.photos.map((p, i) => {
                    return (
                        <Image
                        key={i}
                        style={{
                            width: 300,
                            height: 100,
                        }}
                        source={{ uri: p.node.image.uri }}
                        />
                    );
                    })}
                    </ScrollView> */}
                </View>
            </View>
        )
    }
}

export default Page