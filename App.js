import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AdapterProduct } from './src/Card';

const Recycled = () => {
  const data = [
    {
      name: 'Café com leite',
      img: { uri: 'https://laticiniostaquari.com.br/wp-content/uploads/2020/07/cafe-com-leite-taquari.jpg' }
    },
    {
      name: 'Café Americano',
      img: require('./assets/coffee.png')
    },
    {
      name: 'cappuccino Italiano',
      img: require('./assets/cappuccinoItaliano.png')
    },]
  return (
    <View style={styles.products}>
      {data.map((item) => <AdapterProduct key={item.name} img={item.img} name={item.name} />)}
    </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Castorino Coffee</Text>
      <ScrollView  >
        <Recycled />
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
