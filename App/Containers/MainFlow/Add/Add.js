import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import { height, totalSize, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonBordered from '../../../Components/ButtonBordered';
import ImagePicker from 'react-native-image-picker';
import ButtonColored from '../../../Components/ButtonColored';
import RNPickerSelect from 'react-native-picker-select';
import BackArrowButton from '../../../Components/BackArrowButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import CustomIcon from '../../../Components/CustomIcon';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag_query: '',
      image: null,
      avatarSource: null,
      camera: false,
      imagesList: [{ image: Images.bg }, { image: Images.bg2 }],
      placeholder: { label: 'Choose Category', value: null },
      tags: [],
      tags_list: [
        'SnowBoarding',
        'Cars',
        'Startups',
        'Video games',
        'Outdoors',
        'Wings',
        'UFC',
        'Watches',
        'Bikes',
      ],
      isAddTagModalVisible: false,
      loading: false,
    };
  }
  toggleAddTagModal = () =>
    this.setState({ isAddTagModalVisible: !this.state.isAddTagModalVisible });
  image_picker = () => {
    const options = {
      title: 'Select Avatar',
      // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(
      options,
      (func = async response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          //   console.log('User cancelled image picker');
        } else if (response.error) {
          //   console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          //   console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          // await this.setState({ image: source })
          // You can also display the image using data:
          //const image = { uri: response.uri, width: response.width, height: response.height }
          //const avatar = { uri: response.uri, type: response.type, name: response.fileName }
          //this.state.Images.push(image);
          //this.state.simpleImages.push(avatar);
          await this.setState({
            camera: true,
            avatarSource: {
              uri: response.uri,
              type: response.type,
              name: response.fileName,
            },
            image: {
              uri: response.uri,
              width: response.width,
              height: response.height,
            },
          });
        }
      }),
    );
  };
  onAddImage = () => { };
  RenderImages(props) {
    const { data, onPressAdd } = props;
    return (
      <ScrollView horizontal style={{ marginTop: height(2.5) }}>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={data}
          renderItem={({ item, index }) => (
            <Image
              source={item.image}
              style={{
                height: totalSize(10),
                width: totalSize(10),
                borderRadius: 5,
                marginRight: width(2.5),
              }}
            />
          )}
        />
        <TouchableOpacity
          onPress={onPressAdd}
          style={{
            height: totalSize(10),
            width: totalSize(10),
            borderWidth: 1,
            borderColor: Colors.appColor1,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="add" size={totalSize(3)} color={Colors.appColor1} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
  onAddTag = i => {
    this.state.tags.push(this.state.tags_list[i]);
    this.setState({
      tag_query: '',
    });
  };
  onRemoveTag = i => {
    this.state.tags.splice(i, 1);
    this.loading();
  };
  loading = () => this.setState({ loading: !this.state.loading });
  render() {
    const {
      image,
      imagesList,
      placeholder,
      isAddTagModalVisible,
      tags,
      tags_list,
      tag_query,
    } = this.state;
    return (
      <View
        style={[
          ApplicationStyles.mainContainer,
          { backgroundColor: Colors.appBgColor2 },
        ]}>
        <ScrollView>
          <View style={[ApplicationStyles.cardView, styles.card]}>
            <RNPickerSelect
              placeholder={placeholder}
              onValueChange={value => console.log(value)}
              items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
              ]}
            />
          </View>
          <KeyboardAwareScrollView>
            <TextInput
              placeholder="Type the name of this place"
              style={[ApplicationStyles.inputFieldColored, styles.inputStyle]}
            />
          </KeyboardAwareScrollView>
          <KeyboardAwareScrollView>
            <TextInput
              placeholder="Tell us why you love this place..."
              style={[
                ApplicationStyles.inputFieldColored,
                styles.inputStyle,
                { height: height(20), textAlignVertical: 'top' },
              ]}
            />
          </KeyboardAwareScrollView>
          {tags.length ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={this.toggleAddTagModal}
              style={[ApplicationStyles.cardView, styles.card]}>
              <View
                style={[
                  ApplicationStyles.rowCompContainer,
                  {
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    marginVertical: height(1.5),
                  },
                ]}>
                {tags.map((item, key) => {
                  return (
                    <View
                      style={{
                        backgroundColor: Colors.appColor1,
                        borderRadius: 5,
                        marginRight: width(2.5),
                        marginVertical: 2.5,
                        padding: 5,
                      }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                          style={[
                            ApplicationStyles.bodyMediumText,
                            {
                              fontSize: totalSize(1.75),
                              color: Colors.appTextColor6,
                              marginRight: 5,
                            },
                          ]}>
                          {item}
                        </Text>
                        <Icon
                          onPress={() => this.onRemoveTag(key)}
                          name="close"
                          type="material-community"
                          size={totalSize(2.5)}
                          color={Colors.appTextColor6}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
          ) : (
              <TouchableOpacity
                activeOpacity={1}
                onPress={this.toggleAddTagModal}>
                <KeyboardAwareScrollView>
                  <TextInput
                    editable={false}
                    placeholder="Add Tags"
                    style={[
                      ApplicationStyles.inputFieldColored,
                      styles.inputStyle,
                    ]}
                  />
                </KeyboardAwareScrollView>
              </TouchableOpacity>
            )}

          {image === null ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.addImageButton}
              onPress={() => this.image_picker()}>
              <View style={{ alignItems: 'center' }}>
                <Icon
                  name="camera"
                  type="feather"
                  size={totalSize(5)}
                  color={Colors.appColor1}
                />
                <Text
                  style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4 }]}>
                  Upload thumbnail image
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
              <View style={ApplicationStyles.compContainer}>
                <View style={{}}>
                  <Image source={image} style={styles.imageStyle} />
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      top: 0,
                      justifyContent: 'flex-end',
                      backgroundColor: '#00000040',
                      borderRadius: 10,
                    }}>
                    <ButtonBordered
                      onPress={() => this.image_picker()}
                      text="replace the image"
                      buttonStyle={{ height: height(6), marginBottom: 10 }}
                      textStyle={{ fontSize: totalSize(1.5) }}
                    />
                  </View>
                </View>
                <this.RenderImages data={imagesList} />
              </View>
            )}
          <View style={[styles.switchContainer]}>
            <View
              style={[ApplicationStyles.rowCompContainer, styles.rowContainer]}>
              <Text style={ApplicationStyles.bodyLargeText}>Keep this place Secret</Text>
              <Switch />
            </View>
          </View>
          <View style={[ApplicationStyles.compContainer, styles.textContainer]}>
            <Text style={[ApplicationStyles.bodySmallText, styles.TextGrey]}>
              By making this place secret, it won’t be visible to your friend
            </Text>
          </View>
          <View style={[styles.switchContainer]}>
            <View
              style={[ApplicationStyles.rowCompContainer, styles.rowContainer]}>
              <Text style={ApplicationStyles.bodyLargeText}>
                Alert me when I pass nearby
              </Text>
              <Switch />
            </View>
          </View>
          <ButtonColored
            text="Add Place"
            buttonStyle={{ marginVertical: height(5) }}
          />
        </ScrollView>
        <Modal visible={isAddTagModalVisible} animationType="slide">
          <View style={{ flex: 1, backgroundColor: Colors.appBgColor2 }}>
            <View
              style={[
                ApplicationStyles.compContainer,
                { alignItems: 'flex-start', marginBottom: 0 },
              ]}>
              <CustomIcon
                source={Images.arrowLeft_icon}
                size={totalSize(2.5)}
                color={Colors.appTextColor4}
                onPress={this.toggleAddTagModal}
              />
            </View>
            <View style={[ApplicationStyles.cardView, styles.card]}>
              <View
                style={[
                  ApplicationStyles.rowCompContainer,
                  {
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    marginVertical: height(1.5),
                  },
                ]}>
                {tags.map((item, key) => {
                  return (
                    <View
                      style={{
                        backgroundColor: Colors.appColor1,
                        borderRadius: 5,
                        marginRight: width(2.5),
                        marginVertical: 2.5,
                        paddingHorizontal: 5,
                        paddingVertical: 2.5
                      }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                          style={[
                            ApplicationStyles.bodyMediumText,
                            {
                              fontSize: totalSize(1.75),
                              color: Colors.appTextColor6,
                              marginRight: 5,
                            },
                          ]}>
                          {item}
                        </Text>
                        <Icon
                          onPress={() => this.onRemoveTag(key)}
                          name="close"
                          type="material-community"
                          size={totalSize(2.5)}
                          color={Colors.appTextColor6}
                        />
                      </View>
                    </View>
                  );
                })}
                <TextInput
                  onChangeText={value => this.setState({ tag_query: value })}
                  placeholder="Add Tag"
                  autoFocus
                  value={tag_query}
                  style={styles.interestInputField}
                />
              </View>
            </View>
            {tag_query.length > 0 ? (
              <View
                style={[
                  ApplicationStyles.cardView,
                  styles.card,
                  { paddingLeft: width(2.5) },
                ]}>
                <FlatList
                  data={tags_list}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => this.onAddTag(index)}
                      style={{
                        borderBottomWidth: 0.5,
                        borderBottomColor: Colors.appTextColor5,
                      }}>
                      <View
                        style={[
                          ApplicationStyles.compContainer,
                          { marginHorizontal: 0 },
                        ]}>
                        <Text style={ApplicationStyles.bodyMediumText}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : null}
          </View>
        </Modal>
      </View>
    );
  }
}

export default Add;

const styles = StyleSheet.create({
  inputStyle: {
    elevation: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: height(2.5),
    // fontSize: totalSize(1.75),
  },
  addImageButton: {
    marginHorizontal: width(5),
    height: height(25),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.appTextColor5,
    marginTop: height(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: height(25),
    width: null,
    borderRadius: 10,
  },
  card: {
    elevation: 0,
    marginTop: height(2.5),
    borderRadius: 10,
  },
  rowContainer: {
    marginVertical: height(1),
  },
  TextGrey: {
    color: Colors.appTextColor4,
  },
  textContainer: {
    marginTop: height(1),
  },
  interestInputField: {
    height: height(6),
    width: width(30),
    // borderBottomWidth: 0.5,
    // borderBottomColor: Colors.appColor1,
    fontSize: totalSize(1.5),
  },
  switchContainer: {
    backgroundColor: '#FFFF',
    marginTop: height(2.5)
  }
});
