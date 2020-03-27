import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, ApplicationStyles, Family } from '../Themes';
import { height, width, totalSize } from 'react-native-dimension';

class ButtonsListHorizontalSmall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, onPress } = this.props
        return (
            // <View style={{ marginTop: height(2.5) }}>
            //     <FlatList
            //         horizontal
            //         showsHorizontalScrollIndicator={false}
            //         data={data}
            //         renderItem={({ item, index }) =>
            //             <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ backgroundColor: Colors.appColor2, marginRight: width(2.5), borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
            //                 <Text style={[ApplicationStyles.bodySmallText, styles.textStyle]}>{item}</Text>
            //             </TouchableOpacity>
            //         }
            //     />
            // </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 }}>
                {
                    data.map((item, key) => {
                        return (
                            <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ backgroundColor: Colors.appColor2, marginRight: width(2), marginTop: 2.5, borderRadius: 4, paddingHorizontal: 10, paddingVertical: 5 }}>
                                <Text style={[ApplicationStyles.bodySmallText, styles.textStyle]}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }
}

export default ButtonsListHorizontalSmall;

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.appTextColor6,
        //fontSize: totalSize(1.75),
        //fontFamily: Family.appTextMedium
    }
})