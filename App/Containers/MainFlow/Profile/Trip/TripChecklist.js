import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ApplicationStyles, Colors } from '../../../../Themes';
import { totalSize, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';

const CheckedIcon = <Icon name="checkbox-marked" type="material-community" color={Colors.appColor1} size={totalSize(3.5)} />
const UncheckedIcon = <Icon name="checkbox-blank-outline" type="material-community" color={Colors.appTextColor4} size={totalSize(3.5)} />
class TripChecklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            before_checklist: [
                {
                    title: 'Invite my friend to join',
                    checked: false
                },
                {
                    title: 'Book a hotel near good surf',
                    checked: true
                },
                {
                    title: 'Book the plane tickets to Costa Rica',
                    checked: true
                }
            ],
            during_checklist: [
                {
                    title: 'Visit Da Cat Surf Shop in Malibu',
                    checked: false
                },
                {
                    title: 'Zoom call mother for birthday',
                    checked: false
                },
                {
                    title: 'Find a Jeep Rental for 5 days',
                    checked: true
                },
                {
                    title: 'Order my custom longboard',
                    checked: false
                }
            ]
        };
    }
    renderChecklist(props) {
        const { data, title } = props
        return (
            <View style={{}}>
                <View style={[ApplicationStyles.rowCompContainer,]}>
                    <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(1.8) }]}>{title}</Text>
                    <Icon name="add" size={totalSize(3)} color={Colors.appTextColor4} />
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <View style={[ApplicationStyles.rowCompContainer, { justifyContent: 'flex-start', marginTop: 0 }]}>
                            {
                                item.checked ?
                                    CheckedIcon
                                    :
                                    UncheckedIcon
                            }
                            <Text style={[ApplicationStyles.bodyMediumText, { marginHorizontal: width(2.5) }]}>{item.title}</Text>
                        </View>
                    }
                />
            </View>
        )
    }
    render() {
        const { before_checklist, during_checklist } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <this.renderChecklist data={before_checklist} title="Before you go" />
                <this.renderChecklist data={during_checklist} title="During the trip" />
            </View>
        );
    }
}

export default TripChecklist;
