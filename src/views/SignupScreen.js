/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Close from '../assets/icons/Close';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.closeBtn}>
          <Close />
        </Pressable>

        <Text style={styles.headingOne}>Sign Up</Text>

        <Text style={styles.headingTwo}>Login</Text>
      </View>

      <View style={styles.form}>
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <View style={styles.passwordField}>
          <TextInput
            placeholder="Password"
            secureTextEntry={showPassword ? true : false}
            style={[styles.input, {paddingRight: 70}]}
          />
          <Pressable
            style={styles.toggleBtn}
            onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggleText}>
              {showPassword ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.newsletterContainer}
          onPress={() => setChecked(!checked)}>
          <View
            style={[
              styles.checkbox,
              {
                backgroundColor: checked ? colors.primary : '#F6F6F6',
              },
            ]}
          />
          <Text style={styles.newsletterText}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </Pressable>

        <View style={styles.formFooter}>
          <Pressable
            style={styles.signupBtn}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.signupText}>Sign Up</Text>
          </Pressable>
          <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 20,
  },
  headingOne: {
    fontFamily: fonts.semibold,
    color: colors.black,
    fontSize: 30,
    lineHeight: 36.5,
  },
  headingTwo: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 19.5,
    color: colors.primary,
  },
  form: {
    marginTop: 20,
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginTop: 18,
    fontFamily: fonts.medium,
    color: '#666666',
    fontSize: 16,
    lineHeight: 19.5,
  },
  toggleBtn: {
    position: 'absolute',
    top: '50%',
    right: 15,
  },
  toggleText: {
    fontFamily: fonts.medium,
    color: colors.primary,
    fontSize: 16,
    lineHeight: 19.5,
    marginLeft: 20,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
  },
  newsletterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 32,
  },
  newsletterText: {
    fontFamily: fonts.regular,
    color: '#666666',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 10,
  },
  formFooter: {
    marginTop: 50,
  },
  signupBtn: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  signupText: {
    fontFamily: fonts.semibold,
    color: '#fff',
    fontSize: 18,
    lineHeight: 19.5,
  },
  forgotPasswordText: {
    marginTop: 16,
    fontFamily: fonts.semibold,
    fontSize: 16,
    lineHeight: 19.5,
    textAlign: 'center',
    color: colors.primary,
  },
});
export default SignupScreen;
