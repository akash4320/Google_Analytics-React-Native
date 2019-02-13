import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import {
  GoogleAnalyticsTracker
} from "react-native-google-analytics-bridge";
import firebase from 'react-native-firebase'



class App extends Component {

  componentDidMount() {
    // let tracker = new GoogleAnalyticsTracker("UA-132762086-1");

    // tracker.trackScreenView("HomeApp");
    // tracker.trackEvent("Customer", "New");
    // tracker.setAppName("googleAnalyticsDemo");
    const params = { 'analytics': 'yes' }
    firebase.analytics().logEvent('My_App_open', params)
    firebase.analytics().setAnalyticsCollectionEnabled(true);
    firebase.analytics().setAnalyticsCollectionEnabled(true);
    firebase.analytics().setUserId('G_Analytics');
  }
  smtng = () => {
    this.adeqa();
  }
  cal = () => {
    const params = { 'analytics': 'yes' }
    firebase.analytics().logEvent('Button1_press', params);
    firebase.analytics().setUserProperty("uGender","Male");
  }
  render() {
    firebase.analytics().setCurrentScreen('googleAnalyticsDemo');
    return (
      <View>
        <TouchableOpacity style={{ marginTop: 40, alignSelf: 'center' }} onPress={this.cal}>
          <Text style={{ fontSize: 40 }}>
            Hello
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 40, alignSelf: 'center' }} onPress={this.smtng}>
          <Text style={{ fontSize: 40 }}>
            Hello
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;