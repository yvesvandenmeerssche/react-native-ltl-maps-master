import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { GiftedChat, InputToolbar, Send, Actions, ActionsProps } from 'react-native-gifted-chat'
import { Icon } from 'react-native-elements'
import { totalSize, height, width } from 'react-native-dimension'
import { ApplicationStyles, Family, Images, Colors } from '../../../Themes'
import MenuIcon from '../../../Components/MenuIcon'
import BackArrowButton from '../../../Components/BackArrowButton'
that = null
export default class ChatScreen extends React.Component {
    state = {
        messages: [],
    }
    componentDidMount = () => that = this
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Kelly Slater",
            headerStyle: ApplicationStyles.headerStyle,
            headerTitleStyle: ApplicationStyles.headerTitleStyle,
            headerTitleAlign: 'center',
            headerRight: <MenuIcon style={{ marginRight: width(5) }} />,
            headerBackImage: <BackArrowButton color={Colors.appTextColor4} />

        }
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
    renderInputToolbar(props) {
        //Add the extra styles via containerStyle
        return <InputToolbar {...props} containerStyle={styles.inputToolbar} >
        </InputToolbar>
    }
    renderSend(props) {
        return (
            <Send
                {...props}
                containerStyle={{ borderWidth: 0 }}
            >
                <View style={{ marginRight: 5, marginBottom: 12.5, backgroundColor: Colors.appColor1, borderRadius: 100 }}>
                    {/* <Icon name="arrow-up" type="material-community" size={totalSize(3)} color={Colors.appColor1} /> */}
                    <Text style={[ApplicationStyles.bodyMediumText, { color: '#FFFF', fontFamily: Family.appTextBold, marginHorizontal: 7.5, marginVertical: 5 }]}>Send</Text>
                </View>
            </Send>
        );
    }
    renderActions(props) {
        return (
            <Actions
                {...props}
            >
                <View style={{}}>
                    <Icon name="camera" type="material-community" size={totalSize(3)} color={Colors.appColor1} />
                </View>
            </Actions>
        );
    }
    _renderActions(props) {
        const options = {
            'Choose from gallery': (props) => {
                console.log('pick image');
            },
            'Take a picture': (props) => {
                console.log('take picture');
            },
            'Cancel': () => {
                console.log('cancel');
            }
        };
        return (
            <Actions {...props} options={options} >
                <Icon name="camera" type="material-community" size={totalSize(3)} color={Colors.appColor1} />
            </Actions>
        );
    };
    render() {
        return (
            <View style={ApplicationStyles.mainContainer}>
                <StatusBar backgroundColor={'#FFFF'} />
                <GiftedChat
                    messages={this.state.messages}
                    alwaysShowSend
                    placeholder="Write here..."
                    renderSend={this.renderSend}
                    // renderActions={(props) => this._renderActions(props)}
                    onSend={messages => this.onSend(messages)}
                    textInputStyle={ApplicationStyles.bodyMediumText}
                    renderInputToolbar={this.renderInputToolbar}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headerIconContiainer: {
        height: totalSize(4),
        width: totalSize(4),
        borderRadius: 100,
        backgroundColor: Colors.appColor1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputToolbar: {
        // marginLeft: 15,
        // marginRight: 15,
        // marginTop: 10,
        // marginBottom: 2.5,
        borderTopWidth: 0,
        elevation: 10
        // borderWidth: 0.5,
        // borderColor: Colors.appColor1,
        // borderRadius: 25
    }
})
