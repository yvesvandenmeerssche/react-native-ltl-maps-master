import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors } from '../../../Themes';
import { height, totalSize, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../../Components/ButtonColored';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    OptionButton(props) {
        const { iconName, title, onPress } = props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{ marginHorizontal: width(5), borderBottomWidth: 0.5, borderBottomColor: Colors.appTextColor5 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', marginVertical: height(2) }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Icon name={iconName} type="material-community" size={totalSize(2.75)} color={Colors.appColor1} />
                    </View>
                    <View style={{ flex: 8, alignItems: 'flex-start' }}>
                        <Text style={[ApplicationStyles.bodyLargeText, {  }]}>{title}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Icon name="arrow-right" type="simple-line-icon" size={totalSize(2.5)} color={Colors.appTextColor4} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={ApplicationStyles.mainContainer}>
                <View style={{ flex: 1 }}>
                    <this.OptionButton iconName={'account-outline'} title="Edit Profile" />
                    <this.OptionButton iconName={'bell-outline'} title="Notifications" />
                    <this.OptionButton iconName={'flag-outline'} title="Change my region" />
                    <this.OptionButton iconName={'email-outline'} title="Change email marketing" />
                </View>
                <ButtonColored text="Log out" buttonStyle={{ marginVertical: height(2.5) }} />

            </View>
        );
    }
}

export default Settings;
