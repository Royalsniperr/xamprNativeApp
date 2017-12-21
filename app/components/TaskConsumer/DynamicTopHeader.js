import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Text,
    View, Alert, Image, Button, TouchableOpacity
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class DynamicTopHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSubmitIcon: false
        }

    }
    handleOnChange() {
        console.log('2nd component')
        this.props.onStatusChange(obj);
        this.setState({ showSubmitIcon: true });
    }

    render() {
        return (
            <View>
                <View style={styles.deviceStatusBar}></View>

                <View style={styles.container} >
                    <View style={[styles.panel1]} >

                        {!this.state.showSubmitIcon &&
                            <MaterialCommunityIcons name="arrow-left" style={styles.iconStyle2} />
                        }

                        {this.state.showSubmitIcon &&
                            <TouchableOpacity onPress={this.props.submitData} >
                                <MaterialCommunityIcons name="check" style={styles.iconStyle2}
                                />
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={[styles.panel2]} >
                        <MaterialCommunityIcons name="pin" style={styles.iconStyle2} />
                        <MaterialCommunityIcons name="information-variant" style={styles.iconStyle2} />
                        <MaterialCommunityIcons name="dots-vertical" style={styles.iconStyle2} />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#2196F3',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        //  marginTop:20
    },
    panel1: {
        flex: 9,
        // paddingLeft: 4,
    },
    panel2: {
        flex: 4,
        flexDirection: 'row'
        // backgroundColor: '#E8F5FE'
    },
    rowContent: {
        flexDirection: 'row'
    },
    imageStyle: {
        width: 70,
        height: 80,
        borderRadius: 4,
    },
    activityName: {
        fontSize: 15,
        fontWeight: "400",
        color: '#3090DC',
        fontWeight: 'bold'
    },
    activityDesc: {
        color: '#666',
        fontSize: 15,
        paddingTop: 4,
        paddingLeft: 12,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    updateAction: {
        color: 'gray',
        fontSize: 13,
        marginRight: 4,
        fontStyle: 'italic',
        paddingTop: 4
    },
    userCount: {
        flexDirection: 'row',
        paddingLeft: 60,
        color: 'gray',
        fontSize: 13,
        fontStyle: 'italic'
    },
    iconStyle: {
        fontSize: 30,
        color: 'white',
        // paddingRight: 10,
        // marginLeft: 10,
        // marginRight: 10,
        // paddingTop: 25
    },
    iconStyle2: {
        fontSize: 30,
        color: 'white',
        paddingRight: 10,
        // marginLeft: 10,
        // marginRight: 10,
        // paddingTop: 25
    },
    deviceStatusBar: {
        backgroundColor: '#1D75BC',
        height: 20
    }

})

// AppRegistry.registerComponent('App', () => App)

// DynamicTopHeader.propTypes={
//     submitHandler:React.PropTypes.func

// };
