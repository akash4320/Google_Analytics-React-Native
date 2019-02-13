import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import {
    GoogleAnalyticsTracker
} from "react-native-google-analytics-bridge";
import firebase from 'react-native-firebase'



class NewFile extends Component {

    componentDidMount() {
        // let tracker = new GoogleAnalyticsTracker("UA-132762086-1");

        // tracker.trackScreenView("HomeApp");
        // tracker.trackEvent("Customer", "New");
        // tracker.setAppName("googleAnalyticsDemo");
        const params = { 'analytics': 'yes' }
        firebase.analytics().logEvent('Customer1', params)
        firebase.analytics().setAnalyticsCollectionEnabled(true);
        firebase.analytics().setAnalyticsCollectionEnabled(true);
        firebase.analytics().setCurrentScreen('googleAnalyticsDemo');
        firebase.analytics().setUserId('analytics');
    }
    smtng = () => {
        this.adeqa();
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={{ marginTop: 40, alignSelf: 'center' }}>
                    <Text style={{ fontSize: 40 }}>
                        HIIII
          </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 40, alignSelf: 'center' }} onPress={this.smtng}>
                    <Text style={{ fontSize: 40 }}>
                        HIIII
          </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NewFile;