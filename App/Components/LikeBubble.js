
import React, { Component } from 'react';

import { Platform, StyleSheet, Text, Animated, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Colors, ApplicationStyles } from '../Themes';
import { totalSize } from 'react-native-dimension';

export default class LikeBubble extends Component {

    constructor() {
        super()
        this.state = {
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.yPosition, {
                toValue: -75,
                duration: 500,
            }),
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 500,
            })
        ]
        ).start(() => {
            setTimeout(() => {
                this.props.animationEnd(this.props.count)
            }, 5000);
        })
    }

    render() {
        const animationStyles = {
            transform: [{ translateY: this.state.yPosition }],
            opacity: this.state.opacity
        }

        return (
            <Animated.View style={[styles.clapBubble, animationStyles]} >
                <Text style={[ApplicationStyles.bodyLargeText, styles.likeText]}> +{this.props.count} </Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    clapBubble: {
        position: 'absolute',
        height: totalSize(7.5),
        width: totalSize(7.5),
        borderRadius: 100,
        backgroundColor: Colors.appBgColor1,
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    likeText: {
        // color: 'white',
        //fontSize: 16,
        color: Colors.appColor1
    }
});