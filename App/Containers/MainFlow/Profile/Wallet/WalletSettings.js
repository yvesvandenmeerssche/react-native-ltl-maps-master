import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../../../../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonRound from '../../../../Components/ButtonRound'
import { Icon } from 'react-native-elements';
class WalletSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    optionButton(props) {
        const { iconName, tintColor, title, onPress, iconType, subTitle } = props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ marginHorizontal: width(5), marginBottom: height(1), borderBottomWidth: 0.5, borderBottomColor: Colors.appTextColor5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: height(2) }}>
                    <View style={{ flex: 1.5, alignItems: 'flex-start' }}>
                        <ButtonRound
                            buttonStyle={{ borderRadius: 10, elevation: 0, backgroundColor: tintColor + '40', }}
                            content={
                                <Icon name={iconName} type={iconType ? iconType : "material-community"} color={tintColor} size={totalSize(2)} />
                            }
                        />
                    </View>
                    <View style={{ flex: 8.5, }}>
                        <Text style={[ApplicationStyles.h4, { fontSize: totalSize(1.75) }]}>{title}</Text>
                        <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4 }]}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        const { trees, balance, transections } = this.state
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <ImageBackground source={Images.bg} style={ApplicationStyles.bgContainer}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 3 }}>
                        <View style={ApplicationStyles.rowCompContainer}>
                            <ButtonRound
                                onPress={() => navigation.goBack()}
                                buttonStyle={{ borderRadius: 10, elevation: 0, paddingHorizontal: 12 }}
                                content={
                                    <Icon name="ios-arrow-back" type="ionicon" color={Colors.appTextColor3} size={totalSize(2.25)} />
                                }
                            />
                            <Text style={[ApplicationStyles.bodyMediumText, { fontFamily: Family.appTextBold }, styles.textWhite]}>Settings</Text>
                            <View style={{ width: width(10) }}>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 7 }}>
                        <View style={[{ flex: 1 }, ApplicationStyles.bottomCardView, {}]}>
                            <View style={[ApplicationStyles.compContainer, {}]}>
                            </View>
                            <this.optionButton
                                iconName="signal"
                                tintColor={Colors.appColor5}
                                title="Wallet Details"
                                subTitle="Your wallet details"
                            />
                            <this.optionButton
                                iconName="dollar"
                                iconType="font-awesome"
                                tintColor={Colors.appColor5}
                                title="Scan QR Code"
                                subTitle="Add another device"
                            />
                            <this.optionButton
                                iconName="lock-outline"
                                tintColor={Colors.appColor5}
                                title="Reset PIN"
                                subTitle="Reset your wallet pin"
                            />
                            <this.optionButton
                                iconName="face-recognition"
                                tintColor={Colors.appColor5}
                                title="Enable Biometric"
                                subTitle="Check your face ID"
                                onPress={() => navigate('faceID')}
                            />
                            <this.optionButton
                                iconName="credit-card"
                                tintColor={Colors.appColor5}
                                title="Show Mnemonics"
                                subTitle="Write down your 12 word mnemonic"
                                iconType="font-awesome"

                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

export default WalletSettings;

const styles = StyleSheet.create({
    dpStyle: {
        borderRadius: 10,
        height: totalSize(7.5),
        width: totalSize(7.5)
    },
    textWhite: {
        color: Colors.appTextColor6
    },
    welcomeText: {
        fontSize: totalSize(2.25),
        letterSpacing: 1.5,
        textAlign: 'left'
    }
})