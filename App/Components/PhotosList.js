import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ApplicationStyles, Family, Colors } from '../Themes';
import { totalSize, height, width } from 'react-native-dimension';
import ButtonSeeAll from './ButtonSeeAll';

class PhotosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { images, onPressImage, onPressSeeAll } = this.props
        return (
            <View>
                <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
                    <Text style={[ApplicationStyles.HeadingTiny, { fontFamily: Family.appTextRegular }]}>Gallery</Text>
                    <ButtonSeeAll onPress={onPressSeeAll} />
                </View>
                <View style={[ApplicationStyles.rowCompContainer, { justifyContent: 'flex-start',marginTop:0 }]}>
                    <View style={{ flex: 1, paddingVertical: 5 }}>
                        <Image source={images[0].image} style={{ flex: 1, height: null, width: null, borderRadius: 5 }} />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {
                            images.map((item, key) => {
                                return (
                                    <>
                                        {
                                            key > 0 && key < 5 ?
                                                <View style={{ marginVertical: 5 }}>
                                                    <Image source={item.image} style={{ height: height(10), width: width(20), borderRadius: 5, }} />
                                                    {
                                                        key === 4 ?
                                                            <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: '#00000040', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                                                <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor6 }]}>+12 More</Text>
                                                            </View>
                                                            :
                                                            null
                                                    }
                                                </View>
                                                :
                                                null
                                        }
                                    </>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }
}

export default PhotosList;
