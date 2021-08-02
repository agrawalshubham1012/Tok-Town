import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Styles from '../../../res/Styles';
import Strings from '../../../res/Strings';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import AppStatusbar from '../../components/AppStatusbar';

function TabMeetingScreen(props) {
    const [data, setData] = useState([{ name: Strings.meetings }, { name: Strings.general }, { name: Strings.version },
    { name: Strings.tellOther }, { name: Strings.rateTokTown }, { name: Strings.privacyPolicy },
    { name: Strings.termsOfService }, { name: Strings.communityStandards }]);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { }} activeOpacity={0.6}>
                <View style={Styles.settingRowContainerStyle}>
                    {index !== 0 &&
                        <View style={Styles.settingRowDividerStyle} />
                    }
                    <View style={Styles.settingRowItemTextContainerStyle}>
                        <Text style={Styles.settingRowTextStyle} numberOfLines={1}>{item.name}</Text>
                        <Image
                            style={Styles.settingRowImageStyle}
                            source={require('../../../res/images/icon_drop_down.png')}
                        />
                    </View>

                </View>

            </TouchableOpacity>
        );
    }


    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
           
        </View>
    );
}
export default TabMeetingScreen;
