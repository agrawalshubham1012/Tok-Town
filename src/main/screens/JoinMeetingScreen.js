import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';
import AppStatusbar from '../components/AppStatusbar';
import { TextField} from 'react-native-material-textfield-plus';
import Colors from '../../res/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function JoinMeetingScreen(props) {
    const [text, onChangeText] = React.useState("");
    const onPress = () => {
        props.navigation.navigate('JoinScreen')
    }

    const formatText = () => {
        
    }

    const onSubmit = () => {
        
    }
    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <AppHeader
                title={Strings.appName}
                isRightIcon1Visible={true}
                onRightIcon1Press={() => { props.navigation.goBack(); }}
                onBackPress={() => { props.navigation.goBack(); }}
            />
            <KeyboardAwareScrollView extraScrollHeight={20}>
            <View style={Styles.joinContainerStyle}>
                <View style={Styles.joinBackgroundContainerStyle}>
                    <Image
                        style={Styles.joinBackgroundStyle}
                        source={require('../../res/images/icon_roundtable.png')}
                    />
                    <Text style={Styles.joinTitleStyle}>{Strings.join_meeting}</Text>
                </View>
                <View style={Styles.formContainer}>
                    <TextField
                        label={Strings.company_name}
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
                        tintColor={Colors.color_texthint}
                        baseColor={Colors.color_texthint}
                        labelTextStyle={Styles.textLabelStyle}
                        titleTextStyle={Styles.textInputStyle}
                        onChangeText={onChangeText}
                    />
                    <TextField
                        label={Strings.meeting_name}
                        formatText={this.formatText}
                        onSubmitEditing={this.onSubmit}
                        ref={this.fieldRef}
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
                />
            </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
export default JoinMeetingScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});