
import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Styles from '../../res/Styles';
import PropTypes from 'prop-types';

const AppButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={[Styles.appButtonContainerStyle, props.containerStyle]}>
            <View>
                <Text style={[Styles.appButtonTextStyle, props.textStyle]}> {props.text} </Text>
            </View>
        </TouchableOpacity>
    )
}

AppButton.propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.Styles,
    containerStyle: PropTypes.Styles,
    onPress: PropTypes.func
};

AppButton.defaultProps = {
    text: 'Next',
};
export default AppButton;