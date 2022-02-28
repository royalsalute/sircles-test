import axios from 'axios';

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export default ({navigation, route}) => {
  const {
    params: {user},
  } = route;

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <ScrollView
      style={{flex: 1, width: '100%'}}
      contentContainerStyle={{paddingVertical: 30, paddingHorizontal: 20}}>
      <View style={[styles.itemSectionContainer, {alignItems: "center"}]}>
        <FontAwesome name="user-circle" size={64} color={Colors.TEXT} style={{marginBottom: 20}} />
        <Text style={styles.itemUserName}>{user.name}</Text>
        <Text style={styles.itemCompany}>{user.company.name}</Text>
      </View>
      <View style={styles.itemSectionContainer}>
        <Text style={styles.itemSectionTitle}>Contact Information</Text>
        <Text style={[styles.itemRowText, {marginBottom: 20}]}>{user.email}</Text>
        <Text style={styles.itemRowText}>{user.address.street}</Text>
        <Text style={styles.itemRowText}>{user.address.suite}</Text>
        <Text style={styles.itemRowText}>{user.address.city}, {user.address.zipcode}</Text>
        <Text style={styles.itemRowText}>{user.phone}</Text>
      </View>
      <View style={styles.itemSectionContainer}>
        <Text style={styles.itemSectionTitle}>Other Information</Text>
        <Text style={styles.itemRowText}>User Name: {user.username}</Text>
        <Text style={styles.itemRowText}>Website: {user.website}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemUserName: {
    fontSize: 22,
    fontFamily: Fonts.main.semibold,
    color: Colors.TEXT,
    textAlign: 'center',
  },
  itemCompany: {
    fontSize: 16,
    fontFamily: Fonts.main.medium,
    color: Colors.TEXT_LIGHT,
    textAlign: 'center',
    marginTop: 10,
  },
  itemSectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.main.semibold,
    color: Colors.TEXT,
    textAlign: 'center',
    marginBottom: 20
  },
  itemSectionContainer: {
    marginBottom: 40,
  },
  itemRowText: {
    fontSize: 16,
    fontFamily: Fonts.main.medium,
    color: Colors.TEXT_LIGHT,
    marginBottom: 5
  },
});
