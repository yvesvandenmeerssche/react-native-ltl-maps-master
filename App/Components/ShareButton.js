import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {Images} from '../Themes';
import Share, {ShareSheet, Button} from 'react-native-share';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const options = Platform.select({
  ios: {
    activityItemSources: [
      {
        placeholderItem: {type: 'url', content: url},
        item: {
          default: {type: 'url', content: url},
        },
        subject: {
          default: title,
        },
        linkMetadata: {originalUrl: url, url, title},
      },
      {
        placeholderItem: {type: 'text', content: message},
        item: {
          default: {type: 'text', content: message},
          message: null, // Specify no text to share via Messages app.
        },
      },
    ],
  },
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
  },
});

class ShareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, color} = this.props;
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => Share.open(options)}>
        <Image
          source={Images.share_icon}
          resizeMode="contain"
          style={{
            height: totalSize(2.25),
            width: totalSize(2.25),
            tintColor: {color},
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default ShareButton;
