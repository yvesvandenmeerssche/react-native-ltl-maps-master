import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ApplicationStyles, Colors, Images } from '../../../Themes';
import CustomIcon from '../../../Components/CustomIcon'
import { totalSize, width, height } from 'react-native-dimension';
import BackArrowButton from '../../../Components/BackArrowButton';
import ButtonsListHorizontal from '../../../Components/ButtonsListHorizontal';
import ButtonColored from '../../../Components/ButtonColored';
let that
class FilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: ['Sleep', 'Eat', 'Sports', 'Hiking', 'Play', 'Travel'],
            when: [
                {
                    title: 'Surfing',
                    selected: false
                },
                {
                    title: 'Wellness',
                    selected: true
                },
                {
                    title: 'Foodie',
                    selected: false
                },
                {
                    title: 'Art',
                    selected: false
                },
                {
                    title: 'Tropical',
                    selected: true
                },
                {
                    title: 'Romantic',
                    selected: false
                }
            ],
            talking: [
                {
                    title: 'Yoga',
                    selected: false
                },
                {
                    title: 'Playgolf',
                    selected: true
                },
                {
                    title: 'Snowboard',
                    selected: false
                },
                {
                    title: 'Sailing',
                    selected: false
                },
                {
                    title: 'Surfing',
                    selected: true
                },
                {
                    title: 'Skiing',
                    selected: false
                }
            ],
            starts: [
                {
                    title: 'Reef',
                    selected: false
                },
                {
                    title: 'Pointbreak',
                    selected: true
                },
                {
                    title: 'Beachbreak',
                    selected: false
                },
                {
                    title: 'Shorty',
                    selected: false
                },
                {
                    title: 'Wetsuit',
                    selected: true
                },
                {
                    title: 'Longboard',
                    selected: false
                }
            ],
            loading: false
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Search Filter",
            headerStyle: ApplicationStyles.headerStyle,
            headerTitleStyle: ApplicationStyles.headerTitleStyle,
            headerTitleAlign: 'center',
            headerBackImage: <BackArrowButton color={Colors.appTextColor4} />,
            headerRight: <View style={{ marginRight: width(5) }}><CustomIcon source={Images.reset_icon} size={totalSize(2.5)} color={Colors.appTextColor4} /></View>,
        }
    }
    load = () => this.setState({ loading: !this.state.loading })

    componentDidMount = () => that = this

    onSelectWhenOption = (i) => {
        this.state.when[i].selected = !this.state.when[i].selected
        this.load()
    }
    renderDynamicButton(props) {
        const { data, onPress } = props
        return (
            <View style={{ marginHorizontal: width(5), flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                {
                    data.map((item, key) => {
                        return (
                            <TouchableOpacity onPress={onPress} activeOpacity={1} style={{ backgroundColor: item.selected ? Colors.appColor2 : Colors.appBgColor2, marginRight: width(2.5), borderRadius: 5, marginVertical: height(1), paddingHorizontal: 10, paddingVertical: 5 }}>
                                <Text style={[ApplicationStyles.bodyMediumText, { color: item.selected ? Colors.appTextColor6 : Colors.appTextColor4 }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }

    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        const { buttons, when, talking, starts } = this.state
        return (
            <View style={ApplicationStyles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ButtonsListHorizontal
                        data={buttons}
                        onPress={() => navigate('exploreDestination')}
                    />
                    <View style={[ApplicationStyles.compContainer, styles.titleContainer]}>
                        <Text style={[ApplicationStyles.h4, styles.titleStyle]}>When I travel I prefer:</Text>
                    </View>
                    <this.renderDynamicButton data={when} />

                    <View style={[ApplicationStyles.compContainer, styles.titleContainer]}>
                        <Text style={[ApplicationStyles.h4, styles.titleStyle]}>Taking a break to enjoy:</Text>
                    </View>
                    <this.renderDynamicButton data={talking} />

                    <View style={[ApplicationStyles.compContainer, styles.titleContainer]}>
                        <Text style={[ApplicationStyles.h4, styles.titleStyle]}>A perfect trip starts with:</Text>
                    </View>
                    <this.renderDynamicButton data={starts} />

                    <ButtonColored text="Filter" buttonStyle={{ marginVertical: height(5) }} />
                </ScrollView>
            </View>
        );
    }
}

export default FilterScreen;

const styles = StyleSheet.create({
    titleContainer: {
        marginBottom: height(1),
        marginTop: height(5)
    },
    titleStyle: {
        fontSize: totalSize(2.5)
    },
    smallTextStyle: {

    }
})