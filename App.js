import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { AdapterProduct } from './src/Card';
import { AdapterModal } from './src/Modal';

const Recycled = props => {
  const data = [
    {
      name: 'Café com leite',
      img: { uri: 'https://laticiniostaquari.com.br/wp-content/uploads/2020/07/cafe-com-leite-taquari.jpg' },
      size: [{ title: 'P', time: 3000 }, { title: 'M', time: 5000 }, { title: 'G', time: 10000 }]
    },
    {
      name: 'Café Americano',
      img: require('./assets/coffee.png'),
      size: [{ title: 'P', time: 3000 }, { title: 'G', time: 10000 }]
    },
    {
      name: 'cappuccino Italiano',
      img: require('./assets/cappuccinoItaliano.png'),
      size: [{ title: 'M', time: 5000 }]
    },]
  return (
    <View style={styles.products}>
      {data.map(
        (item) =>
          <AdapterProduct
            key={item.name}
            img={item.img}
            name={item.name}
            size={item.size}
            getState={props.getState}
            call={props.call}
            reset={props.reset}
          />
      )
      }
    </View>
  );
}



const App = () => {
  const [getState, setState] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [getStatus, setStatus] = useState('Escolha um tamanho');

  const call = (state, time) => {
    setStatus('Preparando o pedido')
    setState(state)
    setTimeout(
      () => {
        setStatus('Finalizar pedido')
        setModalVisible(true)
        setTimeout(
          () => {
            reset(true)
          }, 5000
        )
      }, time
    )
  }

  const reset = state => {
    setStatus('Escolha um tamanho')
    setState(state)
    setModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <AdapterModal modalVisible={modalVisible} reset={reset} />  
      <View style={styles.title}>
        <Text style={styles.textTitle}>Castorino Coffee</Text> 
        <Text style={styles.textState}>{getStatus}</Text> 
      </View>
      <ScrollView  >
        <Recycled getState={getState} call={call}  />
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
  title: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  products: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }, 
  textState: {
    fontSize: 13,
    color: 'sienna',
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
