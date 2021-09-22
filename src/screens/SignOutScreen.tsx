import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { logout } from '../utils/authAction';
import { UserContext } from '../contexts/userContext';

export const SignOutScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    logout().then((res) => {
      if (res) setUser(null);
    });
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#7CC4FA" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
