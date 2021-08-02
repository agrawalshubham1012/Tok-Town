
import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Styles from '../../res/Styles';
import PropTypes from 'prop-types';
import Strings from '../../res/Strings';

const AppHeader = (props) => {
    return (
        <View style={Styles.appHeaderContainerStyle}>
            <View style={Styles.appHeaderTitleContainerStyle}>
                <Text style={Styles.appHeaderTitleStyle}>{props.title}</Text>
            </View>
            {props.isBackVisible &&
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={props.onBackPress}
                    style={Styles.appHeaderBackImageContainerStyle}>
                    <Image
                        style={Styles.appHeaderBackImageStyle}
                        source={require('../../res/images/icon_back.png')}
                    />
                </TouchableOpacity>
            }
            {props.isRightIcon1Visible &&
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={props.onRightIcon1Press}
                    style={Styles.appHeaderR1ContainerStyle}>
                    <Image
                        style={Styles.appHeaderIconRightStyle}
                        source={require('../../res/images/icon_close.png')}
                    />
                </TouchableOpacity>
            }
            {props.isRightIcon2Visible &&
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={props.onRightIcon2Press}
                    style={Styles.appHeaderR2ContainerStyle}>
                    <Image
                        style={Styles.appHeaderIconRightStyle}
                        source={require('../../res/images/icon_user.png')}
                    />
                </TouchableOpacity>
            }
        </View>

    )
}

AppHeader.propTypes = {
    title: PropTypes.string,
    isBackVisible: PropTypes.bool,
    isRightIcon1Visible: PropTypes.bool,
    isRightIcon2Visible: PropTypes.bool,
    onBackPress: PropTypes.func,
    onRightIcon1Press: PropTypes.func,
    onRightIcon2Press: PropTypes.func
};


AppHeader.defaultProps = {
    title:Strings.appName,
    isBackVisible:true,
    isRightIcon1Visible:false,
    isRightIcon2Visible: false,
};

export default AppHeader;