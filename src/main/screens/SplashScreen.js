import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import AppStatusbar from '../components/AppStatusbar';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';

function SplashScreen(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'MeetingScreen' }]
           })
          }, 4000);
    }, []);

    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <Image
                style={Styles.splashTopImageStyle}
                source={require('../../res/images/img_splash_top.png')}
            />
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Image
                    style={Styles.splashBottomImageStyle}
                    source={require('../../res/images/img_splash_bottom.png')}
                />
            </View>
            <View style={Styles.splashLogoContainerStyle}>
                <Image
                    style={Styles.splashLogoImageStyle}
                    source={require('../../res/images/icon_logo.png')}
                />
                <Text style={Styles.splashLogoTextStyle}>{Strings.appName}</Text>
            </View>
        </View>
    );
}
export default SplashScreen;
