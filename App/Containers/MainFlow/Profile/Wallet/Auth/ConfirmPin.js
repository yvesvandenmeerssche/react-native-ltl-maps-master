import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../../Themes';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { width, totalSize } from 'react-native-dimension';
class ConfirmPin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    render() {
        const { code } = this.state
        const { navigate } = this.props.navigation
        return (
            <ImageBackground source={Images.piano_playing} style={ApplicationStyles.bgContainer}>
                <View style={[ApplicationStyles.mainContainer, { backgroundColor: '#00000080', justifyContent: 'center' }]}>
                    <View style={ApplicationStyles.compContainer}>
                        <Text style={[ApplicationStyles.h3, { textAlign: 'center', color: Colors.appTextColor6 }]}>Confirm Your Pin</Text>
                    </View>
                    <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
                        <SmoothPinCodeInput
                            placeholder={<View style={{
                                width: 10,
                                height: 10,
                                borderRadius: 25,
                                opacity: 0.3,
                                backgroundColor: '#FFFFFFBF',
                            }}></View>}
                            mask={<View style={{
                                width: 10,
                                height: 10,
                                borderRadius: 25,
                                backgroundColor: '#FFFFFF',
                            }}></View>}
                            maskDelay={1000}
                            password={true}
                            cellStyle={null}
                            cellSize={totalSize(5)}
                            autoFocus={true}
                            cellSpacing={0}
                            codeLength={6}
                            cellStyleFocused={null}
                            value={code}
                            onFulfill={() => navigate('signup')}
                            onTextChange={code => this.setState({ code })}
                        />
                    </View>
                    <View style={[ApplicationStyles.compContainer, { marginHorizontal: width(15) }]}>
                        <Text style={[ApplicationStyles.bodyMediumText, styles.textWhite, { textAlign: 'center' }]}>Please make sure to remember your PIN. If you forget your PIN you will not be able to recover your LTL wallet ...</Text>
                    </View>
                    <View style={[ApplicationStyles.compContainer, { marginHorizontal: width(15) }]}>
                        <Text style={[ApplicationStyles.bodySmallText, styles.textWhite, { textAlign: 'center' }]}>By creating your wallet, you agree to our Terms Of Service and Privacy Policy</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default ConfirmPin;

const styles = StyleSheet.create({
    textWhite: {
        color: Colors.appTextColor6
    }
})