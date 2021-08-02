import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppStatusbar from '../components/AppStatusbar';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';
import Colors from '../../res/Colors';
import Swiper from 'react-native-swiper'

function MeetingScreen(props) {

    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <View style={Styles.meetingTopContainer}>
                <View style={Styles.meetingAppLogoContainer}>
                    <Image
                        style={Styles.meetingLogoStyle}
                        source={require('../../res/images/icon_logo.png')}
                    />
                    <Text style={Styles.meetingAppnameStyle}>{Strings.appName}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => { props.navigation.navigate('SettingsScreen') }}
                    style={Styles.meetingSettingContainerStyle}>
                    <Image
                        style={Styles.meetingSettingImageStyle}
                        source={require('../../res/images/icon_settings.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={Styles.meetingDescContainerStyle}>
                <Text style={Styles.meetingTitleStyle}>{Strings.start_a_meeting}</Text>
                <Text style={Styles.meetingDescStyle}>{Strings.start_a_meeting_desc}</Text>
            </View>

            <View style={Styles.meetingSwiperContainer}>
                <Swiper showsButtons={false}
                dotColor={Colors.color_inactivedot} 
                activeDotColor={Colors.color_activedot} >
                    <Image
                        style={Styles.meetingBackgroundStyle}
                        source={require('../../res/images/img_meeting.png')}
                    />
                    <Image
                        style={Styles.meetingBackgroundStyle}
                        source={require('../../res/images/img_meeting.png')}
                    />
                </Swiper>
            </View>

        
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { props.navigation.navigate('JoinMeetingScreen') }}
                style={Styles.meetingBackImageContainerStyle}>
                <Image
                    style={Styles.meetingBackImageStyle}
                    source={require('../../res/images/icon_back.png')}
                />
            </TouchableOpacity>
        </View>
    );
}
export default MeetingScreen;
