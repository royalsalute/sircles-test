import axios from 'axios';

import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

const UserListItem = props => {
  const {item: user, navigation} = props;
  const onPressUser = useCallback(() => {
    navigation.push("UserDetails", {
      user
    });
  }, [user, navigation]);

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPressUser}>
      <View style={{flex: 1}}>
        <Text style={styles.itemUserName}>{user.name}</Text>
        <Text style={styles.itemEmail}>{user.email}</Text>
      </View>
      <MaterialCommunityIcon name="chevron-right" size={18} color={Colors.GRAY} />
    </TouchableOpacity>
  );
};

export default ({navigation}) => {
  const [loadingData, setLoadingData] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLoadingData(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({data: userData}) => {
        setUserData(userData);
      })
      .finally(() => setLoadingData(false));
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{paddingTop: 10}}
        data={userData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => <UserListItem item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: "center"
  },
  itemUserName: {
    fontSize: 18,
    fontFamily: Fonts.main.medium,
    color: Colors.TEXT,
  },
  itemEmail: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: Fonts.main.regular,
  },
});
