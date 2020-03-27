import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ApplicationStyles, Images, Colors } from '../../../../Themes';
import { width, totalSize, height } from 'react-native-dimension';
import CustomIcon from '../../../../Components/CustomIcon';
import ButtonRound from '../../../../Components/ButtonRound';
import { Icon } from 'react-native-elements';
import ButtonColored from '../../../../Components/ButtonColored';
import DateRangePicker from '../../../../Components/DateRangePicker';

const DropDownIcon = () => {
    return (
        <Icon name="ios-arrow-down" type="ionicon" color={Colors.appTextColor4} size={totalSize(2)} />
    )
}
const CloseButton = (props) => {
    const { onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={{ height: totalSize(2.5), width: totalSize(2.5), borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#D6D6D6' }}>
            <Icon name="close" size={totalSize(2)} color={Colors.appTextColor4} />
        </TouchableOpacity>
    )
}
class CreatePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDestinationModalVisible: false,
            isDateModalVisible: false,
            isGuestModalVisible: false,
            isFavoriteModalVisible: false,
            departure_location: '',
            destinations_selected: [],
            departure_date: '',
            return_date: '',
            guests_selected: [],
            fav_styles_selected: [],
            destinations: [
                {
                    name: "Los Angeles",
                    selected: false
                },
                {
                    name: "Loslenes",
                    selected: false
                },
                {
                    name: "New City",
                    selected: false
                },
                {
                    name: "Down Town",
                    selected: false
                },
                {
                    name: "Lios Wek",
                    selected: false
                },
                {
                    name: "Los Angeles",
                    selected: false
                },
                {
                    name: "Loslenes",
                    selected: false
                },
                {
                    name: "New City",
                    selected: false
                },
                {
                    name: "Down Town",
                    selected: false
                },
                {
                    name: "Lios Wek",
                    selected: false
                }
            ],
            guests: [
                {
                    name: 'Max',
                    selected: false
                },
                {
                    name: 'Lee',
                    selected: false
                },
                {
                    name: 'Jack',
                    selected: false
                },
                {
                    name: 'Max',
                    selected: false
                },
                {
                    name: 'Lee',
                    selected: false
                },
                {
                    name: 'Jack',
                    selected: false
                },
                {
                    name: 'Max',
                    selected: false
                },
                {
                    name: 'Lee',
                    selected: false
                },
                {
                    name: 'Jack',
                    selected: false
                }
            ],
            fav_styles: [
                {
                    name: 'Style 1',
                    selected: false
                },
                {
                    name: 'Style 2',
                    selected: false
                },
                {
                    name: 'Style 3',
                    selected: false
                },
                {
                    name: 'Style 4',
                    selected: false
                },
                {
                    name: 'Style 5',
                    selected: false
                },
                {
                    name: 'Style 6',
                    selected: false
                },
                {
                    name: 'Style 7',
                    selected: false
                },
                {
                    name: 'Style 8',
                    selected: false
                }
            ]
        };
    }
    toggleDestinationModal = () => this.setState({ isDestinationModalVisible: !this.state.isDestinationModalVisible })
    toggleDateModal = () => this.setState({ isDateModalVisible: !this.state.isDateModalVisible })
    toggleGuestModal = () => this.setState({ isGuestModalVisible: !this.state.isGuestModalVisible })
    toggleFavoriteModal = () => this.setState({ isFavoriteModalVisible: !this.state.isFavoriteModalVisible })
    renderSelectedItems(props) {
        const { data, onPressRemove } = props
        return (
            <View style={[ApplicationStyles.rowCompContainer, { justifyContent: 'flex-start', flexWrap: 'wrap', marginVertical: height(1.5), marginHorizontal: width(1) }]}>
                {
                    data.map((item, key) => {
                        return (
                            <View style={{ backgroundColor: Colors.appBgColor2, borderRadius: 5, marginRight: width(2.5), marginVertical: 2.5, paddingHorizontal: 5, paddingVertical: 5 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[ApplicationStyles.bodyMediumText, { marginRight: 5, fontSize: totalSize(1.75) }]}>{item}</Text>
                                    <CloseButton onPress={() => onPressRemove(key)} />
                                </View>
                            </View>
                        )
                    })

                }
            </View>
        )
    }
    CloseButton(props) {
        const { onPress } = props
        return (
            <TouchableOpacity onPress={onPress} style={{ height: totalSize(2.5), width: totalSize(2.5), borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.appBgColor2 }}>
                <Icon name="close" size={totalSize(2.5)} color={Colors.appTextColor4} />
            </TouchableOpacity>
        )
    }
    modalTextInput(props) {
        const { placeholder, onPressClose, containerStyle } = props
        return (
            <View style={[ApplicationStyles.inputContainerColored, { justifyContent: 'flex-start', backgroundColor: Colors.appBgColor2, elevation: 0 }, containerStyle]}>
                <View style={{ flex: 9 }}>
                    <TextInput
                        placeholder={placeholder}
                        style={[ApplicationStyles.inputField, { width: null }]}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <CloseButton onPress={onPressClose} />
                </View>
            </View>
        )
    }
    pickerComponent(props) {
        const { icon, content, onPress } = props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[ApplicationStyles.inputContainerBorderd, styles.inputContainerStyle, { justifyContent: 'flex-start', marginTop: height(2.5), }]}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <CustomIcon source={icon} color={Colors.appColor1} size={totalSize(2.25)} />
                </View>
                <View style={{ flex: 8 }}>
                    {content}
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <DropDownIcon />
                </View>
            </TouchableOpacity>
        )
    }
    renderSelectableItems(props) {
        const { icon, data, onPress } = props
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity activeOpacity={1} onPress={() => onPress(index)} style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', marginVertical: height(2.5) }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <CustomIcon source={icon} color={Colors.appTextColor4} size={totalSize(1.75)} />
                            </View>
                            <View style={{ flex: 8, alignItems: 'flex-start' }}>
                                <Text style={[ApplicationStyles.bodyLargeText, {  }]}>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icon
                                    name={item.selected ? "ios-radio-button-on" : "ios-radio-button-off"}
                                    color={item.selected ? Colors.appColor1 : Colors.appTextColor5}
                                    type="ionicon"
                                    size={totalSize(2.5)}
                                />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
    onSelectDestination = (i) => {
        this.state.destinations[i].selected = !this.state.destinations[i].selected
        this.load()
    }
    onSelectGuest = (i) => {
        this.state.guests[i].selected = !this.state.guests[i].selected
        this.load()
    }
    onSelectStyle = (i) => {
        this.state.fav_styles[i].selected = !this.state.fav_styles[i].selected
        this.load()
    }
    onRemoveDestinations = (i) => {
        this.state.destinations_selected.splice(i, 1)
        this.load()
    }
    onRemoveGuest = (i) => {
        this.state.guests_selected.splice(i, 1)
        this.load()
    }
    onRemoveFavorite = (i) => {
        this.state.fav_styles_selected.splice(i, 1)
        this.load()
    }

    onOkDestination = async () => {
        // this.setState({ destinations_selected: [] })
        for (const item of this.state.destinations) {
            if (item.selected) {
                this.state.destinations_selected.push(item.name)
            }
        }
        this.toggleDestinationModal()
        for (const i of this.state.destinations) {
            i.selected = false
        }
        this.load()
    }
    onOkGuests = async () => {
        // this.setState({ destinations_selected: [] })
        for (const item of this.state.guests) {
            if (item.selected) {
                this.state.guests_selected.push(item.name)
            }
        }
        this.toggleGuestModal()
        for (const i of this.state.guests) {
            i.selected = false
        }
        this.load()
    }
    onOkStyles = async () => {
        // this.setState({ destinations_selected: [] })
        for (const item of this.state.fav_styles) {
            if (item.selected) {
                this.state.fav_styles_selected.push(item.name)
            }
        }
        this.toggleFavoriteModal()
        for (const i of this.state.fav_styles) {
            i.selected = false
        }
        this.load()
    }
    load = () => this.setState({ loading: !this.state.loading })
    render() {
        const { navigate } = this.props.navigation
        const {
            isDestinationModalVisible,
            isDateModalVisible,
            isGuestModalVisible,
            isFavoriteModalVisible,
            departure_location,
            destinations,
            destinations_selected,
            departure_date,
            return_date,
            guests_selected,
            fav_styles_selected,
            guests,
            fav_styles
        } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <View style={{ flex: 1 }}>
                    <View style={[ApplicationStyles.rowCompContainer, { marginBottom: 0 }]}>
                        <View style={{ flex: 8 }}>
                            <View style={[ApplicationStyles.inputContainerBorderd, styles.inputContainerStyle, { justifyContent: 'flex-start', marginHorizontal: 0 }]}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <CustomIcon source={Images.location_icon} color={Colors.appColor1} size={totalSize(2.25)} />
                                </View>
                                <View style={{ flex: 9 }}>
                                    <TextInput
                                        placeholder="Select departure"
                                        style={[ApplicationStyles.inputField, { width: null }]}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 2, alignItems: 'flex-end' }}>
                            <ButtonRound
                                content={<CustomIcon source={Images.currentLocation_icon} color={Colors.appColor1} size={totalSize(2.25)} />}
                            />
                        </View>
                    </View>
                    <this.pickerComponent
                        onPress={this.toggleDestinationModal}
                        icon={Images.location_icon}
                        content=
                        {
                            !destinations_selected.length ?
                                <Text style={[ApplicationStyles.bodyMediumText, styles.placeholderStyle, {}]}>Select destination</Text>
                                :
                                <this.renderSelectedItems data={destinations_selected} onPressRemove={(index) => this.onRemoveDestinations(index)} />
                        }
                    />
                    <this.pickerComponent
                        onPress={this.toggleDateModal}
                        icon={Images.calender_icon}
                        content=
                        {
                            departure_date.length && return_date.length ?
                                <Text style={[ApplicationStyles.bodyMediumText, { fontSize: totalSize(1.75), marginVertical: height(2.5) }]}>{departure_date} - {return_date}</Text>
                                :
                                <Text style={[ApplicationStyles.bodyMediumText, styles.placeholderStyle, {}]}>Departure Date - Return Date</Text>

                        }
                    />
                    <this.pickerComponent
                        onPress={this.toggleGuestModal}
                        icon={Images.user_icon}
                        content=
                        {
                            !guests_selected.length ?
                                <Text style={[ApplicationStyles.bodyMediumText, styles.placeholderStyle, {}]}>Guests</Text>
                                :
                                <this.renderSelectedItems data={guests_selected} onPressRemove={(index) => this.onRemoveGuest(index)} />
                        }
                    />
                    <this.pickerComponent
                        onPress={this.toggleFavoriteModal}
                        icon={Images.heartOutline_icon}
                        content=
                        {
                            !fav_styles_selected.length ?
                                <Text style={[ApplicationStyles.bodyMediumText, styles.placeholderStyle, {}]}>Favorite Style</Text>
                                :
                                <this.renderSelectedItems data={fav_styles_selected} onPressRemove={(index) => this.onRemoveFavorite(index)} />
                        }
                    />
                </View>
                <ButtonColored
                    text="Create new plan for me"
                    buttonStyle={{ marginVertical: height(2.5) }}
                    onPress={() => navigate('')}
                />
                <Modal
                    visible={isDestinationModalVisible}
                    transparent
                    animationType="slide"
                >
                    <View style={{ flex: 1, backgroundColor: '#00000080' }}>
                        <View style={{ flex: 3 }}>

                        </View>
                        <View style={{ flex: 7, backgroundColor: Colors.appBgColor1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <this.modalTextInput
                                placeholder="Search location"
                                containerStyle={{ marginTop: height(2.5) }}
                            />
                            <this.renderSelectableItems
                                data={destinations}
                                icon={Images.location_icon}
                                onPress={(index) => this.onSelectDestination(index)}
                            />
                            <ButtonColored
                                text="Ok"
                                buttonStyle={{ marginVertical: height(2) }}
                                onPress={this.onOkDestination}
                            />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={isDateModalVisible}
                    transparent
                    animationType="slide"
                >
                    <View style={{ flex: 1, backgroundColor: '#00000080' }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <View style={{ backgroundColor: Colors.appBgColor1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <View style={[ApplicationStyles.rowCompContainer, { justifyContent: 'flex-start', marginVertical: height(1.5) }]}>
                                    <View style={{ flex: 1, paddingRight: width(2.5) }}>
                                        <Text style={ApplicationStyles.bodyLargeText}>Departure Date</Text>
                                        <TextInput
                                            editable={false}
                                            value={departure_date}
                                            style={[ApplicationStyles.inputFieldBorderd, { marginHorizontal: 0 }, styles.dateInputFieldsStyle]}
                                        />
                                    </View>
                                    <View style={{ flex: 1, paddingLeft: width(2.5) }}>
                                        <Text style={[ApplicationStyles.bodyLargeText, {}]}>Return Date</Text>
                                        <TextInput
                                            editable={false}
                                            value={return_date}
                                            style={[ApplicationStyles.inputFieldBorderd, { marginHorizontal: 0 }, styles.dateInputFieldsStyle]}
                                        />
                                    </View>
                                </View>
                                <DateRangePicker
                                    // initialRange={['2018-04-01', '2018-04-10']}
                                    onSuccess={(s, e) => this.setState({ departure_date: s, return_date: e })}
                                    theme={{ markColor: Colors.appcolor3, markTextColor: Colors.appTextColor1 }} />
                                <ButtonColored
                                    text="Ok"
                                    buttonStyle={{ marginVertical: height(2) }}
                                    onPress={this.toggleDateModal}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={isGuestModalVisible}
                    transparent
                    animationType="slide"
                >
                    <View style={{ flex: 1, backgroundColor: '#00000080' }}>
                        <View style={{ flex: 3 }}>

                        </View>
                        <View style={{ flex: 7, backgroundColor: Colors.appBgColor1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <this.modalTextInput
                                placeholder="Search Guest"
                                containerStyle={{ marginTop: height(2.5) }}
                            />
                            <this.renderSelectableItems
                                data={guests}
                                icon={Images.user_icon}
                                onPress={(index) => this.onSelectGuest(index)}
                            />
                            <ButtonColored
                                text="Ok"
                                buttonStyle={{ marginVertical: height(2) }}
                                onPress={this.onOkGuests}
                            />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={isFavoriteModalVisible}
                    transparent
                    animationType="slide"
                >
                    <View style={{ flex: 1, backgroundColor: '#00000080' }}>
                        <View style={{ flex: 3 }}>

                        </View>
                        <View style={{ flex: 7, backgroundColor: Colors.appBgColor1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <this.modalTextInput
                                placeholder="Search Style"
                                containerStyle={{ marginTop: height(2.5) }}
                            />
                            <this.renderSelectableItems
                                data={fav_styles}
                                icon={Images.heartOutline_icon}
                                onPress={(index) => this.onSelectStyle(index)}
                            />
                            <ButtonColored
                                text="Ok"
                                buttonStyle={{ marginVertical: height(2) }}
                                onPress={this.onOkStyles}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default CreatePlan;

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderColor: Colors.appTextColor4,
        borderRadius: 10
    },
    placeholderStyle: {
        fontSize: totalSize(1.75),
        color: Colors.appTextColor4,
        marginVertical: height(2.5)
    },
    dateInputFieldsStyle: {
        borderColor: Colors.appTextColor5,
        borderRadius: 10,
        marginTop: 5
    }
})