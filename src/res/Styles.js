import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from './Colors';
import { RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const fontConst = 600;
const RobotoMedium = 'Roboto-Medium';
const RobotoBold = 'Roboto-Bold';
const RobotoRegular = 'Roboto-Regular';

const Styles = StyleSheet.create({
    // Common Component Styles
    appButtonContainerStyle: {
        width: '80%',
        alignSelf: 'center',
        height: RFValue(42, fontConst),
        borderRadius: RFValue(42, fontConst) / 2,
        backgroundColor: Colors.color_red,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonTextStyle: {
        color: Colors.color_white,
        fontSize: RFValue(14, fontConst),
        fontFamily: RobotoMedium
    },
    appHeaderContainerStyle: {
        width: '85%',
        height: RFValue(40, fontConst),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    appHeaderBackImageContainerStyle: {
        width: RFValue(40, fontConst),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
    },
    appHeaderBackImageStyle: {
        height: RFValue(20, fontConst),
        width: RFValue(30, fontConst),
        resizeMode: 'contain',
        transform: [{ rotate: '180deg' }],
        tintColor: Colors.color_black
    },
    appHeaderTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    appHeaderTitleStyle: {
        color: Colors.color_black,
        fontFamily: RobotoBold,
        fontSize: RFValue(20, fontConst),
        letterSpacing: 1,
    },
    appHeaderR1ContainerStyle: {
        width: RFValue(30, fontConst),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
    },
    appHeaderR2ContainerStyle: {
        width: RFValue(30, fontConst),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: RFValue(30, fontConst),
        bottom: 0,
        top: 0,
    },
    appHeaderIconRightStyle: {
        height: RFValue(14, fontConst),
        width: RFValue(14, fontConst),
        resizeMode: 'contain',
    },

    // Tabs
    tabLayoutStyle: {
        flexDirection: 'row',
        backgroundColor: Colors.color_tab,
        height: RFValue(50, fontConst),
        elevation: 2,
        position: 'absolute',
        bottom: RFValue(20, fontConst),
        left: RFValue(12, fontConst),
        right: RFValue(12, fontConst),
        paddingHorizontal: RFValue(10, fontConst),
        borderRadius: RFValue(25, fontConst),
        justifyContent: "center",
        alignItems: "center"
    },
    tabContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIconStyle: {
        height: RFValue(17, fontConst),
        width: RFValue(17, fontConst),
        resizeMode: 'contain'
    },
    tabTextStyle: {
        marginTop: '3%',
        fontSize: RFValue(10, fontConst),
        fontFamily: RobotoRegular
    },

    //Splash Screen Styles
    splashContainerStyle: {
        flex: 1,
        backgroundColor: Colors.color_white
    },
    splashTopImageStyle: {
        height: '48%',
        alignSelf: 'flex-end',
        resizeMode: 'stretch',
        aspectRatio: 0.56
    },
    splashBottomImageStyle: {
        height: '30%',
        alignSelf: 'baseline',
        resizeMode: 'stretch',
        aspectRatio: 0.50,
        marginBottom: '20%'
    },
    splashLogoContainerStyle: {
        position: 'absolute',
        top: '41%',
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashLogoImageStyle: {
        width: '15%',
        resizeMode: 'stretch',
        aspectRatio: 1,
    },
    splashLogoTextStyle: {
        fontSize: RFValue(40, fontConst),
        marginLeft: '1%',
        fontFamily: RobotoBold
    },

    //Meeting Screen Styles
    meetingTopContainer: {
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%',
        justifyContent: 'space-between'
    },
    meetingAppLogoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    meetingAppnameStyle: {
        fontSize: RFValue(24, fontConst),
        marginLeft: '4%',
        letterSpacing: 0.5,
        fontFamily: RobotoBold
    },
    meetingLogoStyle: {
        height: screenHeight * 0.06,
        width: screenHeight * 0.06,
        resizeMode: 'stretch'
    },
    meetingSettingContainerStyle: {
        width: RFValue(30, fontConst),
        height: RFValue(30, fontConst),
        alignItems: 'center',
        justifyContent: 'center'
    },
    meetingSettingImageStyle: {
        height: RFValue(24, fontConst),
        width: RFValue(24, fontConst),
        resizeMode: 'contain',
    },
    meetingSwiperContainer: {
        height: '60%',
    },
    meetingBackgroundStyle: {
        resizeMode: 'contain',
        height: '100%',
        width: '80%',
        alignSelf: 'center',
    },
    meetingDescContainerStyle: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    meetingTitleStyle: {
        fontSize: RFValue(28, fontConst),
        marginLeft: '0%',
        fontFamily: RobotoBold,
        letterSpacing: 1.5
    },
    meetingDescStyle: {
        fontSize: RFValue(13, fontConst),
        marginLeft: '0%',
        fontFamily: RobotoRegular,
        letterSpacing: 0.5,
        marginTop: '2%'
    },
    meetingBackImageContainerStyle: {
        width: RFValue(40, fontConst),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '10%',
        bottom: '10%',
    },
    meetingBackImageStyle: {
        height: RFValue(20, fontConst),
        width: RFValue(30, fontConst),
        resizeMode: 'contain',
        width: '180%',
        tintColor: Colors.color_black,
        opacity: 0.2
    },


    //Join Meeting Screen Styles
    joinContainerStyle: {
        flex: 1,
    },
    joinBackgroundContainerStyle: {
        marginTop: "10%",
        width: '85%',
        alignSelf: 'center',
    },
    joinBackgroundStyle: {
        height: screenHeight * 0.12,
        width: screenHeight * 0.12,
        resizeMode: 'contain',
    },

    joinTitleStyle: {
        fontSize: RFValue(30, fontConst),
        marginTop: '8%',
        fontFamily: RobotoBold,
        letterSpacing: 2
    },
    formContainer: {
        marginTop: '10%',
        width: "80%",
        alignSelf: 'center'
    },
    textLabelStyle: {
        fontSize: RFValue(14, fontConst),
        fontFamily: RobotoRegular,
        tintColor: Colors.color_texthint,
    },
    textInputStyle: {
        marginLeft: '2%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.color_black,
    },


    //Setting Screen 
    settingRowContainerStyle: {
        width: '85%',
        alignSelf: 'center'
    },
    settingRowItemTextContainerStyle: {
        flexDirection: 'row',
        paddingVertical: '5%'
    },
    settingRowTextStyle: {
        fontSize: RFValue(14, fontConst),
        fontFamily: RobotoMedium,
        flex: 1,
        letterSpacing: 0.5,
    },
    settingRowImageStyle: {
        height: RFValue(12, fontConst),
        width: RFValue(12, fontConst),
        resizeMode: 'contain',
    },
    settingRowDividerStyle: {
        width: '100%',
        height: RFValue(1, fontConst),
        backgroundColor: Colors.color_inactivedot
    },
    settingCopyrightTextStyle: {
        fontSize: RFValue(12, fontConst),
        fontFamily: RobotoRegular,
        position: 'absolute',
        bottom: '8%',
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center',
        letterSpacing: 1.5,
    },
    // join meeting second screen

    joinSecBackgroundContainerStyle: {
        marginTop: "10%",
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
    },
    joinSecTopBackgroundContainerStyle: {
        width: "50%",
        paddingTop: "4%"
    },
    joinSecBackgroundStyle: {
        height: screenHeight * 0.10,
        width: screenHeight * 0.10,
        resizeMode: 'contain',
        alignSelf: "center",
        marginBottom: "7%"
    },
    joinSecContBackgroundStyle: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    joinSecTitleBackgroundStyle: {
        fontSize: RFValue(13, fontConst),
        fontFamily: RobotoRegular,
        textAlign: 'center',
        letterSpacing: 1,
    },
    joinSecSybTitleBackgroundStyle: {
        fontSize: RFValue(10, fontConst),
        fontFamily: RobotoRegular,
        textAlign: 'center',
        letterSpacing: 1,
        marginBottom: "10%"
    },
    joinSecVerticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: Colors.color_inactivedot,
    },

    // permission screen
    permissionContainerStyle: {
        flex: 1,
    },
    peremDescContainerStyle: {
        width: screenWidth * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
        marginBottom: '5%'
    },
    peremTitleStyle: {
        fontSize: RFValue(23, fontConst),
        marginLeft: '0%',
        fontFamily: RobotoBold,
        letterSpacing: 1.5
    },
    peremUserStyle: {
        width: '100%',
        height: screenWidth * 0.75,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    peremLogoStyle: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.5,
        resizeMode: "contain",
        alignSelf: 'center',
        position: 'absolute',
        borderRadius: screenWidth * 0.5,
        overflow: 'hidden',
    },
    peremLogoBStyle: {
        width: screenWidth * 0.75,
        height: screenWidth * 0.75,
        resizeMode: "contain",
        alignSelf: 'center',
        left: '9%',
        bottom: '0%',
        position: 'absolute'
    },
    peremSwitchContainer: {
        width: screenWidth * 0.8,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: "7%"
    },
    peremSwitchTitle: {
        textAlign: "left",
        fontSize: RFValue(15, fontConst),
        marginLeft: '0%',
        fontFamily: RobotoRegular,
    },
    peremSwitchInput: {
        textAlign: "right",
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'green'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    peremSecHorizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.color_inactivedot,
        marginBottom: '7%'
    },


    // Tab Meet and chat
    meettextContainerStyle: {
        width: screenWidth * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '5%'
    },
    meetAppNameStyle: {
        fontSize: RFValue(23, fontConst),
        letterSpacing: 0.5,
        fontFamily: RobotoBold
    },
    meetListStyle:{
        marginHorizontal:'5%',
        marginTop:'5%',
    },
    meetListItemStyle:{
        width:'44%',
        marginHorizontal:'3%',
        marginVertical:'3%',
    },
    meetItemRowContainerStyle:{
        height:screenHeight * 0.16,
        borderRadius:RFValue(5, fontConst),
        borderWidth:RFValue(1, fontConst),
        borderColor:Colors.color_inactivedot,
        justifyContent:'center',
        alignItems:'center'
    },
    meetItemRowSelectedContainerStyle:{
        height:screenHeight * 0.16,
        borderRadius:RFValue(5, fontConst),
        borderWidth:RFValue(1, fontConst),
        borderColor:Colors.color_red,
        backgroundColor:Colors.color_red,
        justifyContent:'center',
        alignItems:'center'
    },
    meetItemRowIconStyle: {
        height: '40%',
        width: '40%',
        resizeMode: 'contain',
        tintColor:Colors.color_black
    },    
     meetItemRowIconSelectedStyle: {
        height: '45%',
        width: '45%',
        resizeMode: 'contain',
        tintColor:Colors.color_white
    },         
    meetItemRowTextStyle: {
        marginTop: '6%',
        fontSize: RFValue(12, fontConst),
        fontFamily: RobotoRegular,
        letterSpacing:1,
        textAlign:'center',
    },

});

export default Styles;