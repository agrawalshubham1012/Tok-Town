import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Styles from '../../../res/Styles';
import Strings from '../../../res/Strings';
import Colors from '../../../res/Colors';
import AppButton from '../../components/AppButton';
import AppHeader from '../../components/AppHeader';
import AppStatusbar from '../../components/AppStatusbar';

function TabMeetChatScreen(props) {
    const [data, setData] = useState([{ image:require('../../../res/images/icon_video.png'),name: Strings.newMeetings, selected: true },
    { image:require('../../../res/images/icon_chat.png'),name: Strings.chat, selected: false },
    { image:require('../../../res/images/icon_info.png'),name: Strings.info, selected: false },
    { image:require('../../../res/images/icon_sharescreen.png'),name: Strings.shareScreen, selected: false },
    { image:require('../../../res/images/icon_poll.png'),name: Strings.polling, selected: false },
    { image:require('../../../res/images/icon_record.png'),name: Strings.record, selected: false },
    ]);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { }} activeOpacity={0.6} style={Styles.meetListItemStyle}>
                <View style={item.selected ? Styles.meetItemRowSelectedContainerStyle : Styles.meetItemRowContainerStyle}>
                    <Image source={item.image} style={ item.selected ?  Styles.meetItemRowIconSelectedStyle : Styles.meetItemRowIconStyle} />
                    <Text style={[Styles.meetItemRowTextStyle, { color: item.selected ?  Colors.color_white : Colors.color_black }]}>{item.name}</Text>
                </View>

            </TouchableOpacity>
        );
    }


    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <View style={Styles.meetingTopContainer}>
                <Text style={Styles.meetAppNameStyle}>{Strings.appName}</Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => { props.navigation.navigate('SettingsScreen') }}
                    style={Styles.meetingSettingContainerStyle}>
                    <Image
                        style={Styles.meetingSettingImageStyle}
                        source={require('../../../res/images/icon_logout.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={Styles.meettextContainerStyle}>
                    <Text style={Styles.peremTitleStyle}>{Strings.meetandchat}</Text>
                </View>
                <FlatList
                    data={data}
                    numColumns={2}
                    style={Styles.meetListStyle}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id}
                />
            </ScrollView>
            <Text style={Styles.settingCopyrightTextStyle} numberOfLines={1}>{Strings.copyright}</Text>

        </View>
    );
}
export default TabMeetChatScreen;
