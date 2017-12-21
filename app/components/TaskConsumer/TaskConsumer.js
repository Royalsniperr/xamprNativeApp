import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View, Alert, Image, Input
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import ConsumerHeader from './ConsumerHeader';
import DynamicTopHeader from './DynamicTopHeader';
import MenuBar from './MenuBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from '../../../utilities/constants';



var radio_props = [
  { label: 'Not Started', value: 0 },
  { label: 'In Progress', value: 0 },
  { label: 'Blocked', value: 0 },
  { label: 'Completed', value: 0 },
  { label: 'Retain', value: 0 }
];

export default class TaskConsumer extends Component {



  constructor(props) {
    super(props);
    this.activityDataJson = {
      "Status": "Success",
      "Response": {
        "ActivityBasicInfo": {
          "ActivityGuid": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
          "ParentActivityGuid": "no_parent_",
          "ActivityName": "Task titlr",
          "ActivityIcon": "https://beta2xampr.blob.core.windows.net/xampr-media-container/d3e7ee02-22a7-4cb1-b543-09493d89f8ae",
          "ActivityDescription": "Chjc",
          "ActivityThemeCode": "#2196f3",
          "ActivityRepeatCount": 0,
          "TaskColorCode": null,
          "SubTasks": null,
          "Participants": null,
          "OwnerGuid": "5992554c-3ed2-497e-99b6-48027d48f5d0",
          "OwnerName": "Nandini",
          "ExecutorGuid": null,
          "ExecutorName": null,
          "CreatorGuid": null,
          "CreatorName": null,
          "IsSingleInstance": true,
          "IsSingleChoice": false,
          "ActivityType": "TaskActivity",
          "ActivityTypeGuid": "f94c6649-d26c-7f4d-ccea-402228e9522d",
          "ETA": "12-18-2017 12:42 PM",
          "StartDate": null,
          "EndDate": null,
          "Location": "Hyderabad",
          "BlobRef": null,
          "AddOnlyParentUsers": false,
          "IsRepeatActivity": false,
          "RepeatingDays": null,
          "RepeatingHours": null,
          "RecurringFrequency": null,
          "IsBusinessActivity": false,
          "AccessType": 0,
          "IsAdminApprovalRequired": false,
          "Status": 0,
          "ParticipantGuid": "00f05688-5b52-4beb-9f12-278141b7dfde",
          "SiteVisitDesc": null,
          "Attachments": null,
          "ProductName": null,
          "ProductId": null,
          "IsWarranty": null,
          "From": null,
          "To": null,
          "Relations": null,
          "HeaderMetadata": null,
          "Tags": null,
          "AssignedTo": null,
          "DueDate": null,
          "NotificationSettings": "{\"Visibility\" : 2,\r\n\"Volume\" : 9,\r\n\"Tone\" : 3,\r\n\"IsTimeBasedMute\" : false,\r\n\"MuteForDuration\": 0,\r\n\"MuteStartTimeTicks\": \"\",\r\n\"MuteEndTimeTicks\": \"\" }",
          "UnReadMessages": 0,
          "IsPinnedActivity": false,
          "IsArchived": false,
          "Answer": null,
          "ChildActivityGuid": null,
          "SummaryBefore": false,
          "ShowSummary": false,
          "OptionHeaderName": null,
          "TotalInvitations": 3,
          "ChoiceQuestionTotalResponses": 0,
          "Option1Name": "Not Started",
          "Option1ColorCode": "#7092be",
          "Option2Name": "In Progress",
          "Option2ColorCode": "#f1b31c",
          "Option3Name": "Blocked",
          "Option3ColorCode": "#f66010",
          "Option4Name": "Completed",
          "Option4ColorCode": "#66CDAA",
          "Option5Name": null,
          "Option5ColorCode": null,
          "Option1Value": 1,
          "Option2Value": 0,
          "Option3Value": 0,
          "Option4Value": 0,
          "Option5Value": 0,
          "LastMessage": "{UserName} has accepted the invitation for 'Task titlr'",
          "LastMessageTime": "636480621016804294",
          "LastMessageBy": "ANIL GURINDAPALLI*^*d29b1e8f-a0dd-4df5-b956-7b4ef8fc9baa",
          "LastMessageSenderId": "d29b1e8f-a0dd-4df5-b956-7b4ef8fc9baa",
          "AdditiontalQuestionsCount": 0,
          "Data1Name": null,
          "Data1IsNumeric": false,
          "Data1TotalValue": 0,
          "Data1MinValue": 0,
          "Data1MaxValue": 0,
          "Data1TotalResponses": 0,
          "Data2Name": null,
          "Data2ColorCode": null,
          "Data2IsNumeric": false,
          "Data2TotalValue": 0,
          "Data2MinValue": 0,
          "Data2MaxValue": 0,
          "Data2TotalResponses": 0,
          "Data3Name": null,
          "Data3ColorCode": null,
          "Data3IsNumeric": false,
          "Data3TotalValue": 0,
          "Data3MinValue": 0,
          "Data3MaxValue": 0,
          "Data3TotalResponses": 0,
          "Data4Name": null,
          "Data4ColorCode": null,
          "Data4IsNumeric": false,
          "Data4TotalValue": 0,
          "Data4MinValue": 0,
          "Data4MaxValue": 0,
          "Data4TotalResponses": 0,
          "Data5Name": null,
          "Data5ColorCode": null,
          "Data5IsNumeric": false,
          "Data5TotalValue": 0,
          "Data5MinValue": 0,
          "Data5MaxValue": 0,
          "Data5TotalResponses": 0,
          "Data1Value": null,
          "Data2Value": null,
          "Data3Value": null,
          "Data4Value": null,
          "Data5Value": null,
          "UserOption1Value": 0,
          "UserOption2Value": 0,
          "UserOption3Value": 0,
          "UserOption4Value": 0,
          "UserOption5Value": 0,
          "UserData1Value": null,
          "UserData2Value": null,
          "UserData3Value": null,
          "UserData4Value": null,
          "UserData5Value": null,
          "UserGuid": null,
          "UserGuidTrimmed": null,
          "IsAdmin": false,
          "IsParticipant": false,
          "IsInvitation": false,
          "NickName": null,
          "ChoiceQuestionAnswered": false,
          "IsCommunity": false,
          "UserUserGuid": null,
          "UserUserGuidTrimmed": null,
          "UserIsAdmin": false,
          "UserIsParticipant": false,
          "UserIsInvitation": false,
          "UserChoiceQuestionAnswered": false,
          "UserIsCommunity": false,
          "UserNickName": null,
          "Delivered": null,
          "Read": null,
          "CompletedBy": null,
          "CompletedTime": null,
          "CreatedTime": null,
          "IndexPosition": 0,
          "ActivityCurrentStatus": null,
          "PartitionKey": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
          "RowKey": "no_parent_",
          "Timestamp": "2017-11-29T07:41:21.8733125+00:00",
          "ETag": "W/\"datetime'2017-11-29T07%3A41%3A21.8733125Z'\""
        },
        "ActivityUserDetailInfo": {
          "ActivityGuid": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
          "UserGuid": "user_activity_admin_5992554c-3ed2-497e-99b6-48027d48f5d0",
          "UserGuidTrimmed": "5992554c-3ed2-497e-99b6-48027d48f5d0",
          "PhoneNumber": null,
          "IsAdmin": true,
          "IsParticipant": false,
          "IsInvitation": false,
          "IsCommunity": false,
          "CommunityGuid": null,
          "IsInherited": false,
          "IsSpecialInvitation": false,
          "RegistrationType": null,
          "NickName": "Nandini",
          "ChoiceQuestionAnswered": false,
          "Option1Value": 0,
          "Option2Value": 0,
          "Option3Value": 0,
          "Option4Value": 0,
          "Option5Value": 0,
          "Data1Value": null,
          "Data2Value": null,
          "Data3Value": null,
          "Data4Value": null,
          "Data5Value": null,
          "OwnerGuid": null,
          "Answer": null,
          "PartitionKey": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
          "RowKey": "user_activity_admin_5992554c-3ed2-497e-99b6-48027d48f5d0",
          "Timestamp": "2017-11-29T07:41:16.4937764+00:00",
          "ETag": "W/\"datetime'2017-11-29T07%3A41%3A16.4937764Z'\""
        },
        "ChildUserActivities": null,
        "SubTasks": null,
        "SecondLevelActivitiesUpdatedGuidList": null,
        "Participants": [
          {
            "PartitionKey": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "RowKey": "user_activity_admin_5992554c-3ed2-497e-99b6-48027d48f5d0",
            "TimeStamp": "2017-11-29T07:41:16.4937764+00:00",
            "ActivityGuid": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "IsAdmin": true,
            "NickName": "Nandini",
            "UserGuid": "user_activity_admin_5992554c-3ed2-497e-99b6-48027d48f5d0",
            "UserGuidTrimmed": "5992554c-3ed2-497e-99b6-48027d48f5d0"
          },
          {
            "PartitionKey": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "RowKey": "user_activity_invitation_06b4f95e-58b9-407b-8643-282f45bca348",
            "TimeStamp": "2017-11-29T07:41:21.9864083+00:00",
            "ActivityGuid": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "ChoiceQuestionAnswered": false,
            "Data1Value": "",
            "Data2Value": "",
            "Data3Value": "",
            "Data4Value": "",
            "Data5Value": "",
            "IsAdmin": false,
            "IsCommunity": false,
            "IsInherited": false,
            "IsInvitation": true,
            "IsParticipant": true,
            "IsSpecialInvitation": false,
            "NickName": "Akhtar",
            "Option1Value": 0,
            "Option2Value": 0,
            "Option3Value": 0,
            "Option4Value": 0,
            "Option5Value": 0,
            "PhoneNumber": "9966874782",
            "UserGuid": "user_activity_invitation_06b4f95e-58b9-407b-8643-282f45bca348",
            "UserGuidTrimmed": "06b4f95e-58b9-407b-8643-282f45bca348"
          },
          {
            "PartitionKey": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "RowKey": "user_activity_participant_d29b1e8f-a0dd-4df5-b956-7b4ef8fc9baa",
            "TimeStamp": "2017-12-05T09:15:00.9137035+00:00",
            "ActivityGuid": "79acb1c9-0814-4654-bc1c-37fd80997b3d",
            "UserGuid": "user_activity_participant_d29b1e8f-a0dd-4df5-b956-7b4ef8fc9baa",
            "UserGuidTrimmed": "d29b1e8f-a0dd-4df5-b956-7b4ef8fc9baa",
            "PhoneNumber": "9952008073",
            "IsAdmin": false,
            "IsParticipant": true,
            "IsInvitation": false,
            "IsCommunity": false,
            "IsInherited": false,
            "IsSpecialInvitation": false,
            "NickName": "ANIL GURINDAPALLI",
            "ChoiceQuestionAnswered": false,
            "Option1Value": 0,
            "Option2Value": 0,
            "Option3Value": 0,
            "Option4Value": 0,
            "Option5Value": 0,
            "Data1Value": "",
            "Data2Value": "",
            "Data3Value": "",
            "Data4Value": "",
            "Data5Value": ""
          }
        ],
        "ActivityLastReadTimeTicks": 636489316117192100
      }
    };

    // this.getActivityData();

    this.activityData = this.activityDataJson.Response.ActivityBasicInfo;
    // this.activityData = data.Response.ActivityBasicInfo;

    this.consumerHeaderData = {
      ActivityName: this.activityData.ActivityName,
      LastMessage: this.activityData.LastMessage,
      ActivityGuid: this.activityData.ActivityGuid,
      LastMessageTime: this.activityData.LastMessageTime,
      UsersCount: this.activityDataJson.Response.Participants.length,
      Location: this.activityData.Location,
      ETA: this.activityData.ETA

    }

    this.state = {
      Option1Value: this.activityData.Option1Value,
      Option2Value: this.activityData.Option2Value,
      Option3Value: this.activityData.Option3Value,
      Option4Value: this.activityData.Option4Value,
      Option5Value: this.activityData.Option5Value,
      StatusChanged:false
      // show: true
    };
    console.log('whenbind', this.state)
  }

  updateTaskActivity() {
    // console.log('state',this.state.Option1Value)

    this.taskData = {
      ActivityEntityPairs: {
        IsPinnedActivity: false,
        Option1Value: this.activityData.Option1Value,
        Option1Name: this.activityData.Option1Name,
        Option2Value: this.activityData.Option2Value,
        Option2Name: this.activityData.Option2Name,
        Option3Value: this.activityData.Option3Value,
        Option3Name: this.activityData.Option3Name,
        Option4Value: this.activityData.Option4Value,
        Option4Name: this.activityData.Option4Name,
        Option5Value: this.activityData.Option5Value,
        Option5Name: this.activityData.Option5Name,
        IsSingleInstance: true,
        IsSingleChoice: false,
        ActivityThemeCode: "#2196f3"
      },
      ActivityKeyDetailsPairs: {
        ActivityType: Constants.TaskActivity,
        AddOnlyParentUsers: false,
        ActivityGuid: this.activityGuid,
        UserGuid: "f94c6649-d26c-7f4d-ccea-402228e9522d",
        ParentActivityGuid: Constants.NoParentPrefix,
        ActivityTypeGuid: "f94c6649-d26c-7f4d-ccea-402228e9522d",

      },
      ActivityUserEntityPairs: {}
    };
    console.log('jsondata', this.taskData)

  }



  // select_function = (value) => {
  //   if (value == 0) {
  //     Alert.alert(
  //       'Your Text',
  //       "Select param1"
  //     );
  //   };
  //   if (value == 1) {
  //     Alert.alert(
  //       'Your Text',
  //       "Select param2"
  //     );
  //   };
  // }
  updateOptions = (option) => {

    switch (option) {

      case '1':
        this.setState({ Option1Value: 1, Option2Value: 0, Option3Value: 0, Option4Value: 0, Option5Value: 0 });
        console.log('Not Started', this.state.Option1Value);
        break;
      case '2': this.setState({ Option1Value: 0, Option2Value: 1, Option3Value: 0, Option4Value: 0, Option5Value: 0 });
        console.log('Inprogress', this.state.Option2Value);
        break;
      case '3': this.setState({ Option1Value: 0, Option2Value: 0, Option3Value: 1, Option4Value: 0, Option5Value: 0 });
        console.log('Blocked', this.state.Option3Value);
        break;
      case '4': this.setState({ Option1Value: 0, Option2Value: 0, Option3Value: 0, Option4Value: 1, Option5Value: 0 });
        console.log('Completed', this.state.Option4Value);
        break;
      case '5': this.setState({ Option1Value: 0, Option2Value: 0, Option3Value: 0, Option4Value: 0, Option5Value: 1 });
        break;
      default: break;
    }

    console.log('Not Started',this.state.Option1Value);
    console.log('Inprogress',this.state.Option2Value);
    console.log('Blocked',this.state.Option3Value);
    console.log('Completed',this.state.Option4Value);

    //  console.log('state',this.state)


    // this.activityData.Option1Value = this.activityData.Option2Value = this.activityData.Option3Value =
    //   this.activityData.Option4Value = this.activityData.Option5Value = 0;
    // switch (option) {
    //   case '1': this.activityData.Option1Value = 1; break;
    //   case '2': this.activityData.Option2Value = 1; break;
    //   case '3': this.activityData.Option3Value = 1; break;
    //   case '4': this.activityData.Option4Value = 1; break;
    //   case '5': this.activityData.Option5Value = 1; break;
    //   default: break;
    // }
    // console.log('Not Started',this.activityData.Option1Value);
    // console.log('Inprogress',this.activityData.Option2Value);
    // console.log('Blocked',this.activityData.Option3Value);
    // console.log('Completed',this.activityData.Option4Value);


    // this.setState({   Option1value: 0,Option2value: 0,Option3value: 0,Option4value: 0,Option5value: 0  });
    // switch (option) {
    //   case '1': this.setState({   Option1Value: 1  });; break;
    //   case '2': this.setState({   Option2Value: 1  });; break;
    //   case '3': this.setState({   Option3Value: 1  });; break;
    //   case '4': this.setState({  Option4Value: 1,  });; break;
    //   case '5': this.setState({  Option5Value: 1  });; break;
    //   default: break;
    // }
  }
  getColor1 = () => {
    return this.activityData.Option1ColorCode;
    // return '#7094BC';
  }
  getColor2 = () => {
    return this.activityData.Option2ColorCode;
    //  return '#F1B324';
  }
  getColor3 = () => {
    return this.activityData.Option3ColorCode;
    // return '#DD5220';
  }
  getColor4 = () => {
    return this.activityData.Option4ColorCode;
    // return '#4EAA7D';
  }
  getColor5 = () => {
    return this.activityData.Option5ColorCode;
    // return '#F1B324';
  }
  showOption = (index) => {
    if (index === 1) {
      return (this.activityData.Option1Name === '' || this.activityData.Option1Name === null);
    } else if (index === 2) {
      return this.activityData.Option2Name === '' || this.activityData.Option2Name === null;
    } else if (index === 3) {
      return this.activityData.Option3Name === '' || this.activityData.Option3Name === null;
    } else if (index === 4) {
      return this.activityData.Option4Name === '' || this.activityData.Option4Name === null;
    } else if (index === 5) {
      return this.activityData.Option5Name === '' || this.activityData.Option5Name === null;
    }
  }
  onStatusChange(){
console.log('HI am Change')
    this.setState({onStatusChange:true});
  }


  render() {
    return (
      <View>
        <DynamicTopHeader submitData={this.updateTaskActivity} onStatusChange={this.onStatusChange.bind(this)} statusChange={true} ></DynamicTopHeader>
        <View style={styles.consumerHeader} >
          <ConsumerHeader activity={this.consumerHeaderData}></ConsumerHeader>
        </View>
  
        <View style={styles.columnContent}>
          <View style={[styles.rowContent, styles.border]}>
            <View style={styles.panel1}>
              <View style={[styles.rectangleBox, styles.boxIcons, { backgroundColor: this.getColor1() }]} >
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
              </View>
            </View>
            <View style={styles.panel2}>
              <View style={styles.rbnStyle}>
                <RadioButtonInput buttonSize={13} obj={radio_props} 
                  buttonInnerColor={this.getColor1()}
                  buttonOuterColor={this.getColor1()}
                  index={1} value={1}
                  onPress={(value) => {
                    this.updateOptions('1');
                    // this.select_function(value) 
                  }}
                  isSelected={this.state.Option1Value === 1}
                />
                 {/* <MaterialCommunityIcons name="check" style={styles.iconStyle2} onPress={this.updateOptions('1')} /> */}
              </View>
              <Text style={styles.statusTitle}>{this.activityData.Option1Name}</Text>
            </View>
          </View>

          <View style={[styles.rowContent, styles.border]} >
            <View style={styles.panel1}>
              <View style={[styles.rectangleBox, styles.boxIcons, { backgroundColor: this.getColor2() }]} >
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
              </View>
            </View>
            <View style={styles.panel2}>

              <View style={styles.rbnStyle}>
                <RadioButtonInput buttonSize={13} obj={radio_props} 
                  buttonInnerColor={this.getColor2()}
                  buttonOuterColor={this.getColor2()}
                  index={2} value={2}
                  onPress={(value) => {
                    this.updateOptions('2');
                    this.onStatusChange();
                    // this.select_function(value) 
                  }}
                  isSelected={this.state.Option2Value === 1}
                />
              </View>
              <Text style={styles.statusTitle}> {this.activityData.Option2Name}</Text>
            </View>
          </View>

          <View style={[styles.rowContent, styles.border]}>
            <View style={styles.panel1}>
              <View style={[styles.rectangleBox, styles.boxIcons, { backgroundColor: this.getColor3(), }]} >
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
              </View>
            </View>

            <View style={styles.panel2}>
              <View style={styles.rbnStyle}>
                <RadioButtonInput buttonSize={13} obj={radio_props} 
                  buttonInnerColor={this.getColor3()}
                  buttonOuterColor={this.getColor3()}
                  index={3} value={3}
                  onPress={(value) => {
                    this.updateOptions('3');
                    // this.select_function(value)
                  }}
                  isSelected={this.state.Option3Value === 1}
                />
              </View>
              <Text style={styles.statusTitle}> {this.activityData.Option3Name}</Text>
            </View>
          </View>

          <View style={[styles.rowContent, styles.border]} >
            <View style={styles.panel1}>
              <View style={[styles.rectangleBox, styles.boxIcons, { backgroundColor: this.getColor4() }]} >
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
              </View>
            </View>
            <View style={styles.panel2}>
              <View style={styles.rbnStyle}>
                <RadioButtonInput buttonSize={13} obj={radio_props} 
                  buttonInnerColor={this.getColor4()}
                  buttonOuterColor={this.getColor4()}
                  index={4} value={4}
                  onPress={(value) => {
                    this.updateOptions('4');
                    // this.select_function(value) 
                  }}
                  isSelected={this.state.Option4Value === 1}
                />
              </View>
              <Text style={styles.statusTitle}> {this.activityData.Option4Name}</Text>
            </View>
          </View>

          {0 == 1 &&
            <View style={[styles.rowContent, styles.border]} >
              <View style={styles.panel1}>
                <View style={[styles.rectangleBox, styles.boxIcons, { backgroundColor: this.getColor4() }]} >
                  <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle1]} />
                  <MaterialCommunityIcons name="dots-vertical" style={[styles.iconStyle, styles.dotsStyle2]} />
                </View>
              </View>
              <View style={styles.panel2}>
                <View style={styles.rbnStyle}>
                  <RadioButtonInput buttonSize={13} obj={radio_props} 
                    buttonInnerColor={this.getColor4()}
                    buttonOuterColor={this.getColor4()}
                    index={5} value={5}
                    onPress={(value) => {
                      this.updateOptions('5');
                      // this.select_function(value)
                    }}
                    isSelected={this.state.Option5Value === 1}
                  />
                </View>
                <Text style={styles.statusTitle}> Retain</Text>
              </View>
            </View>

          }

 {/* <MaterialCommunityIcons name="check" style={styles.iconStyle2} onPress={this.updateOptions('2')} /> */}
          {/* <MaterialCommunityIcons name="check" style={styles.iconStyle2} onPress={this.updateTaskActivity} /> */}




          {/* <View style={[styles.rowContent, styles.border]}>
            <View style={styles.panel1}>
              <View style={[styles.rectangleBox, { backgroundColor: this.getColor5() }]} ><Text style={styles.boxIcons}><MaterialCommunityIcons name="dots-vertical" style={styles.iconStyle} /><MaterialCommunityIcons name="dots-vertical" style={styles.iconStyle} /></Text></View>
            </View>
            <View style={styles.panel2}>
                 <View style={styles.rbnStyle}>
                <RadioButtonInput buttonSize={13} obj={radio_props}
                  buttonInnerColor={this.getColor5()}
                  buttonOuterColor={this.getColor5()}
                  index={2} value={1} onPress={(value) => { this.setState({ value: value }); this.select_function(value) }} isSelected={this.state.value === radio_props.value} />
              </View>
              <Text style={styles.statusTitle}> {this.activityData.Option5Name}</Text>
            </View>
          </View> */}
        </View>


        {/* <RadioButtonInput obj={radio_props} index={2} value={1} onPress={(value) => { this.setState({ value: value }); this.select_function(value) }} isSelected={this.state.value === radio_props.value} /> */}

        {/* <RadioForm formHorizontal={true} animation={true}>
          <RadioButton labelHorizontal={true} key={radio_props.label} >
            <RadioButtonInput
              obj={radio_props}
              index={radio_props.value}
              isSelected={this.state.value === radio_props.value}
              onPress={(value) => { this.setState({ value: value }); this.select_function(value) }}
              borderWidth={1}
              buttonInnerColor={'black'}
              buttonOuterColor={this.state.value === radio_props.value ? '#2196f3' : '#000'}
              buttonSize={20}
              buttonOuterSize={30}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 10 }}
            />
          </RadioButton>
        </RadioForm> */}

        {/* <RadioForm style={styles.border}
          radio_props={radio_props}
          initial={0}
          onPress={(value) => { this.setState({ value: value }); this.select_function(value) }} /> */}
          <MenuBar></MenuBar>
      </View>




    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10
  },

  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  border: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    // paddingBottom: 8,
  },
  panel1: {
    // flex: 1,
    paddingLeft: 8,
  },
  panel2: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    // backgroundColor: '#E8F5FE'
    backgroundColor: '#fff',
    // justifyContent:'center',
    alignItems: 'flex-start'
  },
  rowContent: {
    flexDirection: 'row'
  },
  columnContent: {
    flexDirection: 'column',
    // paddingTop:10
  },
  imageStyle: {
    width: 70,
    height: 80,
    borderRadius: 4,
  },
  iconStyle: {
    fontSize: 20,
    color: 'white',

  },
  rectangleBox: {
    width: 30,
    height: 70,
    flexDirection: 'row',
  },
  boxIcons: {
    paddingTop: 14,
    paddingLeft: 8,
  },
  statusTitle: {
    // fontWeight: 'bold',
    // paddingTop: 20,
    paddingLeft: 20,
    color: 'gray',

  },
  consumerHeader: {
    backgroundColor: '#ddd',
    padding: 5, 
    borderRadius: 10
  },
  rbnStyle: {
    paddingLeft: 20
  },
  dotsStyle1: {
    marginLeft: -5,
    marginTop: 5

  },
  dotsStyle2: {

    marginLeft: -15,
    marginTop: 5
  },
  iconStyle2: {
    fontSize: 30,
    color: 'white',
    paddingRight: 10,
    backgroundColor: 'blue'

    // marginLeft: 10,
    // marginRight: 10,
    // paddingTop: 25
  },
})

// AppRegistry.registerComponent('App', () => App)


