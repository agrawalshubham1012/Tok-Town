
import React from 'react'
import { View, StatusBar, Dimensions, Platform } from 'react-native'
import PropTypes from 'prop-types';
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? screenHeight * 0.05 : StatusBar.currentHeight;

const AppStatusbar = (props) => {
    return (
        <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: props.barColor }}>
            <StatusBar barStyle={props.barStyle} translucent={true} backgroundColor={props.barColor} />
        </View>
    )
}

AppStatusbar.propTypes = {
    barStyle: PropTypes.string,
    barColor: PropTypes.any,
};

AppStatusbar.defaultProps = {
    barStyle: 'dark-content',
    barColor: '#ffffff'
};

export default AppStatusbar;