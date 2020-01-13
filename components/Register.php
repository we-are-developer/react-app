// src/screens/SettingsScreen.js
import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import * as Network from 'expo-network';
import * as Permissions from 'expo-permissions';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      UserEmail: '',
      UserPassword: '',
    };
  }

  UserRegistrationFunction = () => {
    alert(this.state.UserEmail + ' ' + this.state.UserPassword);

    fetch('http://oceantechnosys.com/oceantechnosys/demo/sonu/api-react/user_registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.UserEmail,
        password: this.state.UserPassword,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        alert(responseJson);
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Login</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={email => this.setState({ UserEmail: email })}
                placeholder="Email ID"
                maxLength={20}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Your Password"
                onChangeText={password =>
                  this.setState({ UserPassword: password })
                }
                maxLength={20}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.saveButton}>
                <Text
                  onPress={this.UserRegistrationFunction}
                  style={styles.saveButtonText}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Text
                  onPress={() => this.props.navigation.navigate('Register')}
                  style={styles.signup}>
                  Click Here, For Sign Up{' '}
                </Text>

                <Text
                  onPress={() => this.props.navigation.navigate('ChangeOption')}
                  style={styles.signup}>
                  Forgot Password{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 9,
    margin: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
  signup: {
    paddingLeft: 7,
    paddingTop: 10,
  },
});
