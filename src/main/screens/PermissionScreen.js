import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Styles from '../../res/Styles';
import Strings from '../../res/Strings';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';
import AppStatusbar from '../components/AppStatusbar';
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield-plus';
import Colors from '../../res/Colors';
import ToggleSwitch from 'toggle-switch-react-native'


function PermissionScreen(props) {

    const onPress = () => {
        props.navigation.navigate('MyTabs')
    }

    const formatText = () => {

    }

    const onSubmit = () => {

    }

    const [text, onChangeText] = useState("");
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

    return (
        <View style={Styles.splashContainerStyle}>
            <AppStatusbar />
            <AppHeader
                title={Strings.appName}
                isBackVisible={false}
                isRightIcon1Visible={true}
                onRightIcon1Press={() => { props.navigation.goBack(); }}
                onBackPress={() => { props.navigation.goBack(); }}
            />
            <View style={Styles.permissionContainerStyle}>
                <View style={Styles.peremDescContainerStyle}>
                    <Text style={Styles.peremTitleStyle}>{Strings.permission}</Text>
                </View>
                <View style={Styles.peremUserStyle}>
                    <Image
                        style={Styles.peremLogoBStyle}
                        source={require('../../res/images/img_user_back.png')}
                    />
                    <Image
                        style={Styles.peremLogoStyle}
                        source={require('../../res/images/icon_permission.jpg')}
                    />
                </View>
                <AppButton
                    onPress={onPress}
                    containerStyle={{ marginTop: '10%', marginBottom: '5%' }}
                />
                <View style={Styles.formContainer}>
                    <View style={Styles.peremSwitchContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={Styles.peremSwitchTitle}>Don't Conect To Audio</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <ToggleSwitch
                                isOn={isSwitchOn}
                                onColor={Colors.color_inactivedot}
                                offColor={Colors.color_inactivedot}
                                label=""
                                circleColor={isSwitchOn ? Colors.color_red : Colors.color_switchon}
                                size="medium"
                                onToggle={isOn => setIsSwitchOn(!isSwitchOn)}
                            />
                            {/* <Switch style={Styles.peremSwitchInput} value={isSwitchOn} onValueChange={onToggleSwitch} /> */}
                        </View>
                    </View>
                    <View style={Styles.peremSecHorizontalLine}></View>
                    <View style={Styles.peremSwitchContainer}>
                        <View style={styles.leftContainer}>
                            <Text style={Styles.peremSwitchTitle}>Turn Off My Video</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <ToggleSwitch
                                isOn={isSwitchOn2}
                                onColor={Colors.color_inactivedot}
                                offColor={Colors.color_inactivedot}
                                label=""
                                circleColor={isSwitchOn2 ? Colors.color_red : Colors.color_switchon}
                                size="medium"
                                onToggle={isOn => setIsSwitchOn2(!isSwitchOn2)}
                            />
                            {/* <Switch style={Styles.peremSwitchInput} value={isSwitchOn2} onValueChange={onToggleSwitch2} /> */}
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
}
export default PermissionScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});