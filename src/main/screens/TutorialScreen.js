import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';

function TutorialScreen(props) {
    return (
        <View style={Styles.splashContainerStyle}>
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
export default TutorialScreen;
