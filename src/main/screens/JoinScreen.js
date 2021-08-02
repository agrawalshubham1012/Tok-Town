import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';
import AppStatusbar from '../components/AppStatusbar';
import { TextField } from 'react-native-material-textfield-plus';
import Colors from '../../res/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function JoinScreen(props) {

    const onPress = () => {
        props.navigation.navigate('PermissionScreen')
    }

    const formatText = () => {

    }

    const onSubmit = () => {

    }

    const [text, onChangeText] = React.useState("");

    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <AppHeader
                title={Strings.appName}
                isRightIcon1Visible={true}
                isRightIcon2Visible={true}
                onRightIcon1Press={() => { props.navigation.goBack(); }}
                onBackPress={() => { props.navigation.goBack(); }}
            />
            <KeyboardAwareScrollView extraScrollHeight={20}>
                <View style={Styles.joinContainerStyle}>
                    <View style={Styles.joinSecBackgroundContainerStyle}>
                        <View style={Styles.joinSecTopBackgroundContainerStyle}>
                            <Image
                                style={Styles.joinSecBackgroundStyle}
                                source={require('../../res/images/icon_building.png')}
                            />
                            <View style={Styles.joinSecContBackgroundStyle}>
                                <Text style={Styles.joinSecTitleBackgroundStyle}>{Strings.company_name}</Text>
                                <Text style={Styles.joinSecSybTitleBackgroundStyle}>{Strings.company_name_subtext}</Text>
                            </View>
                        </View>
                        <View style={Styles.joinSecVerticleLine}></View>
                        <View style={Styles.joinSecTopBackgroundContainerStyle}>
                            <Image
                                style={Styles.joinSecBackgroundStyle}
                                source={require('../../res/images/icon_interview.png')}
                            />
                            <View style={Styles.joinSecContBackgroundStyle}>
                                <Text style={Styles.joinSecTitleBackgroundStyle}>{Strings.meeting_name}</Text>
                                <Text style={Styles.joinSecSybTitleBackgroundStyle}>{Strings.meeting_name_subtext}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.formContainer}>
                        <TextField
                            label={Strings.your_name}
                            formatText={formatText}
                            onSubmitEditing={onSubmit}
                            tintColor={Colors.color_texthint}
                            baseColor={Colors.color_texthint}
                            labelTextStyle={Styles.textLabelStyle}
                            titleTextStyle={Styles.textInputStyle}
                            onChangeText={onChangeText}
                        />
                        <TextField
                            label={Strings.your_email}
                            formatText={formatText}
                            onSubmitEditing={onSubmit}
                            tintColor={Colors.color_texthint}
                            baseColor={Colors.color_texthint}
                            labelTextStyle={Styles.textLabelStyle}
                            titleTextStyle={Styles.textInputStyle}
                            onChangeText={onChangeText}
                        />
                        <TextField
                            label={Strings.host_pin}
                            formatText={formatText}
                            onSubmitEditing={onSubmit}
                            tintColor={Colors.color_texthint}
                            baseColor={Colors.color_texthint}
                            labelTextStyle={Styles.textLabelStyle}
                            titleTextStyle={Styles.textInputStyle}
                            onChangeText={onChangeText}
                        />
                    </View>
                    <AppButton
                        onPress={onPress}
                        containerStyle={{ marginTop: '10%' }}
                        text="Join Meeting"
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
export default JoinScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});