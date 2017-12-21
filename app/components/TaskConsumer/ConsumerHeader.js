import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Text,
    View, Alert, Image, TextInput
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { MaterialCommunityIcons } from '@expo/vector-icons';


var radio_props = [
    { label: 'Not Started', value: 0 },
    { label: 'In Progress', value: 1 },
    { label: 'Blocked', value: 2 },
    { label: 'Completed', value: 3 }
];

export default class ConsumerHeader extends Component {
    // static propTypes = {
    //     onPress: PropTypes.func,
    //     activity: PropTypes.object,
    //     navigator: PropTypes.object
    //   }
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }

    render() {
        return (
            <View >

                <View style={styles.container} >
                    <View style={[styles.panel1]} >
                        <Image source={require('../../../assets/ActivityImages/TaskActivity.png')} style={styles.imageStyle} />
                    </View>

                    <View style={[styles.panel2]} >
                        <Text style={styles.activityName}> {this.props.activity.ActivityName}</Text>
                        <View style={[styles.rowContent, { flex: 1, }]}>

                            <MaterialCommunityIcons name="reply" style={styles.arrowIcon} />
                            <Text style={[styles.activityDesc,]} ellipsizeMode={'tail'} numberOfLines={1} >{this.props.activity.LastMessage}</Text>

                        </View>
                        <View style={styles.rowContent} >
                            <Text style={[styles.updateAction,]} >{this.props.activity.LastMessageTime} </Text>
                            <Text style={[styles.userCount]}>{this.props.activity.UsersCount} User(s)</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.container]} >
                    <View style={styles.rowContent}>
                        <MaterialCommunityIcons name="map-marker" style={styles.panel3Icons} />
                        <View style={[styles.panel3]} >
                            <Text style={{ paddingTop: 5 }} > {this.props.activity.Location}</Text>
                        </View>
                    </View>
                    <View style={[styles.rowContent, styles.iconMargin]}>

                        <MaterialCommunityIcons name="clock" style={[styles.panel3Icons, styles.clockIcon]} />
                        <View style={[styles.panel4]} >
                            <Text style={{ paddingTop: 5 }}>{this.props.activity.ETA}</Text>
                        </View>
                    </View>
                </View>

            </View>



        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
    },

    panel2: {
        flex: 4,
        backgroundColor: '#E8F5FE',
        // paddingRight:8,
        borderRadius: 4,

    },
    panel3: {
        flex: 3,
        backgroundColor: '#E8F5FE',
        paddingLeft: 4,
        paddingRight: 8,
        borderRadius: 4,
    },
    panel4: {
        //  flex: 3,
        backgroundColor: '#E8F5FE',
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 4,
    },
    rowContent: {
        flex: 1,
        flexDirection: 'row',
    },
    imageStyle: {
        width: 75,
        height: 85,
        borderRadius: 10,
    },
    imageStyle2: {
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    activityName: {
        fontSize: 15,
        fontWeight: "400",
        color: '#2398F5',
        fontWeight: 'bold',
        paddingLeft: 8
    },
    activityDesc: {
        color: '#666',
        // fontSize: 15,
        paddingTop: 6,
        paddingRight:40
        // paddingLeft: 6,
        // fontWeight: 'bold',
        // flexWrap: 'wrap'
    },
    updateAction: {
        color: 'gray',
        fontSize: 13,
        marginRight: 4,
        fontStyle: 'italic',
         paddingTop: 6,
        paddingLeft: 12,
        flex: 4
    },
    userCount: {
        flexDirection: 'row',
        paddingRight: 10,
        color: 'gray',
        fontSize: 13,
        fontStyle: 'italic',
         paddingTop: 6
    },
    arrowIcon: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 12,
        color: '#666',

        // paddingRight:10,
        // marginLeft: 10,
        //  marginRight: 10,
    },
    panel3Icons: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#2398F5',
        color: 'white',
        borderRadius: 3
    },
    clockIcon: {

        marginLeft: 5,

    },
    panelIcons: {

        backgroundColor: '#2398F5'
    },
    iconMargin: {
        marginRight: 25
    }

})

// AppRegistry.registerComponent('App', () => App)
