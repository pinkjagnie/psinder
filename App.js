import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';

import axios from 'axios';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipesRef = useRef(null);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50')
      setUsers(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  const likeHandler = () => {
    console.log('like');
    nextUser();
  };

  const passHandler = () => {
    console.log('pass');
    nextUser();
  };

  const nextUser = () => {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const likePressHandler = () => {
    swipesRef.current.openLeft()
  };

  const passPressHandler = () => {
    swipesRef.current.openRight()
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (user, index) =>
              currentIndex === index && (
                <Swipes
                  key={index}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  likeHandler={likeHandler}
                  passHandler={passHandler}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar likePressHandler={likePressHandler} passPressHandler={passPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
