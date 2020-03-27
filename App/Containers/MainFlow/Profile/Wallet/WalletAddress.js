import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../../../../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonRound from '../../../../Components/ButtonRound'
import { Icon } from 'react-native-elements';
class WalletAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trees: 0,
            balance: 100,
        };
    }



    optionButton(props) {
        const { iconName, tintColor, title, onPress, iconType } = props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', marginBottom: height(2.5) }}>
                <View style={{ flex: 1.5, alignItems: 'flex-start' }}>
                    <ButtonRound
                        buttonStyle={{ borderRadius: 10, elevation: 0, backgroundColor: tintColor + '40', paddingVertical: 10 }}
                        content={
                            <Icon name={iconName} type={iconType ? iconType : "material-community"} color={tintColor} size={totalSize(2)} />
                        }
                    />
                </View>
                <View style={{ flex: 8.5, }}>
                    <Text style={[ApplicationStyles.h4, { fontSize: totalSize(1.75) }]}>{title}</Text>
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
                    <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                        <View style={ApplicationStyles.rowCompContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={Images.user} style={styles.dpStyle} />
                                <View style={{ marginHorizontal: width(5) }}>
                                    <Text style={[ApplicationStyles.HeadingTiny, {}, styles.textWhite]}>David Morales</Text>
                                    <Text style={[ApplicationStyles.bodyMediumText, { marginTop: 5 },]}>San Francisco</Text>
                                </View>
                            </View>
                            <ButtonRound
                                buttonStyle={{ borderRadius: 10, backgroundColor: '#00000040', elevation: 0 }}
                                content={
                                    <Icon name="dots-vertical" type="material-community" color={Colors.appTextColor6} size={totalSize(2.25)} />
                                }
                            />
                        </View>
                        <View style={[ApplicationStyles.cardView, { backgroundColor: Colors.appBgColor2, elevation: 0, borderRadius: 10 }]}>
                            <View style={ApplicationStyles.rowCompContainer}>
                                <View style={{}}>
                                    <Text style={[ApplicationStyles.bodyMediumText, { fontFamily: Family.appTextBold },]}>My Wallet Address</Text>
                                    <Text style={[ApplicationStyles.bodyMediumText, { color: Colors.appTextColor4 },]}>0x92c38961f55a0e9e301162fb…</Text>
                                </View>
                                <ButtonRound
                                    buttonStyle={{ borderRadius: 10, elevation: 0 }}
                                    content={
                                        <Icon name="content-copy" type="material-community" color={Colors.appColor1} size={totalSize(2.25)} />
                                    }
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 6 }}>
                        <View style={[{ flex: 1 }, ApplicationStyles.bottomCardView, {}]}>
                            <View style={[ApplicationStyles.compContainer, {}]}>
                            </View>
                            <this.optionButton
                                iconName="plus"
                                tintColor={Colors.appColor1}
                                title="Add Account"
                            />
                            <this.optionButton
                                iconName="bell-outline"
                                tintColor={Colors.appColor1}
                                title="Notifications"
                            />
                            <this.optionButton
                                iconName="account-outline"
                                tintColor={Colors.appColor1}
                                title="Contact List"
                            />
                            <this.optionButton
                                iconName="settings"
                                tintColor={Colors.appColor5}
                                title="Settings"
                                onPress={() => navigate('walletSettings')}
                            />
                            <this.optionButton
                                iconName="support"
                                tintColor={Colors.appColor5}
                                title="Help"
                                iconType="font-awesome"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

export default WalletAddress;

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