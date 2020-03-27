import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { ApplicationStyles, Images, Colors, Family } from '../../../../Themes';
import { height, width, totalSize } from 'react-native-dimension';
import ButtonRound from '../../../../Components/ButtonRound'
import { Icon } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trees: 0,
            balance: 100,
            transections: [
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '100'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '36'
                },
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '150'
                },
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '200'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '75'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '50'
                },
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '100'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '36'
                },
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '150'
                },
                {
                    type: "Planted",
                    date: '26/07/2020',
                    change: '200'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '75'
                },
                {
                    type: "Upvoted",
                    date: '26/07/2020',
                    change: '50'
                }
            ],
            isQrCodeScanModalVisible: false
        };
    }
    toggleQrCodeScanModal = () => this.setState({ isQrCodeScanModalVisible: !this.state.isQrCodeScanModalVisible })
    becomeOldUser = () => {
        this.setState({
            trees: 78,
            balance: 1785
        })
    }
    componentDidMount = () => setTimeout(() => {
        this.becomeOldUser()
    }, 2000);

    renderTransections(props) {
        const { data, onPress } = props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, key }) =>
                        <View style={{ marginHorizontal: width(7.5), flexDirection: 'row', alignItems: 'center', marginBottom: height(5) }}>
                            <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                                <ButtonRound
                                    buttonStyle={{ borderRadius: 10, elevation: 0, backgroundColor: item.type === "Planted" ? Colors.appColor1 + '40' : Colors.appColor5 + '40' }}
                                    content={
                                        <Icon name={item.type === "Planted" ? "arrow-bottom-right" : "arrow-top-right"} type="material-community" color={item.type === "Planted" ? Colors.appColor1 : Colors.appColor5} size={totalSize(2)} />
                                    }
                                />
                            </View>
                            <View style={{ flex: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={[ApplicationStyles.bodyMediumText, { fontFamily: Family.appTextMedium }]}>{item.type}</Text>
                                    <Text style={[ApplicationStyles.bodySmallText, { color: Colors.appTextColor4 }]}>{item.date}</Text>
                                </View>
                                <Text style={[ApplicationStyles.bodySmallText, { color: item.type === "Planted" ? Colors.appColor1 : Colors.appTextColor4 }]}>+ {item.change}.00 LTL</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
    render() {
        const { trees, balance, transections, isQrCodeScanModalVisible } = this.state
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <ImageBackground source={Images.bg2} style={ApplicationStyles.bgContainer}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 3 }}>
                        <View style={ApplicationStyles.rowCompContainer}>
                            <TouchableOpacity onPress={() => navigate('walletAddress')}>
                                <Image source={Images.user} style={styles.dpStyle} />
                            </TouchableOpacity>
                            <Text style={[ApplicationStyles.HeadingTiny, {}, styles.textWhite]}>{trees} Trees planted</Text>
                            <ButtonRound
                                onPress={this.toggleQrCodeScanModal}
                                buttonStyle={{ borderRadius: 10, }}
                                content={
                                    <Icon name="qrcode" type="antdesign" color={Colors.appColor1} size={totalSize(2.25)} />
                                }
                            />
                        </View>
                        <View style={[ApplicationStyles.compContainer, { alignItems: 'center' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                <Text style={[ApplicationStyles.bodyMediumText, { marginTop: 5 }, styles.textWhite]}>LTL</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[ApplicationStyles.HeadingLarge, { marginHorizontal: 10 }, styles.textWhite]}>{balance}.00</Text>
                                    <Icon name="ios-arrow-down" type="ionicon" size={totalSize(2.5)} color={Colors.appTextColor5} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 7 }}>
                        {
                            balance === 100 ?
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <View style={ApplicationStyles.compContainer}>
                                        <Text style={[ApplicationStyles.bodyMediumText, styles.textWhite, styles.welcomeText]}>Discovering nearby places at worldwide destinations and share your journey with friends.</Text>
                                    </View>
                                    <View style={ApplicationStyles.compContainer}>
                                        <Text style={[ApplicationStyles.bodyMediumText, styles.textWhite, styles.welcomeText]}>Get rewarded with tokens when people upvote your photos. They are used to plant trees.</Text>
                                    </View>
                                </View>
                                :
                                <View style={[{ flex: 1 }, ApplicationStyles.bottomCardView, {}]}>
                                    <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                                        <Text style={[ApplicationStyles.HeadingMedium, {}]}>LTL Wallet Transactions</Text>
                                    </View>
                                    <this.renderTransections data={transections} />
                                </View>
                        }
                    </View>
                </View>
                <Modal
                    visible={isQrCodeScanModalVisible}
                    transparent
                    animationType="slide"
                >
                    <View style={{ flex: 1, backgroundColor: '#00000040' }}>
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={[{ flex: 9 }, ApplicationStyles.bottomCardView, { justifyContent: 'space-between' }]}>
                            <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                                <Text style={[ApplicationStyles.h4, { textAlign: 'center' }]}>Scan QR Code</Text>
                                <Text style={[ApplicationStyles.bodyMediumText, { textAlign: 'center', color: Colors.appTextColor4, marginTop: 10 }]}>Align qr code within frame to scan</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Icon name="qrcode" type="antdesign" color={Colors.appTextColor1} size={totalSize(25)} />
                            </View>
                            <View style={[ApplicationStyles.compContainer, { marginVertical: height(5) }]}>
                                <Text onPress={this.toggleQrCodeScanModal} style={[ApplicationStyles.bodyMediumText, { textAlign: 'center', colors: Colors.appTextColor3, fontFamily: Family.appTextMedium }]}>Cancel</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>

        );
    }
}

export default Wallet;

const styles = StyleSheet.create({
    dpStyle: {
        borderRadius: 10,
        height: totalSize(5),
        width: totalSize(5)
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