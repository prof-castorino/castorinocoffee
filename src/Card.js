import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

const ButtonSize = props => {
  return (
    <Button
      onPress={() => {
        props.call(false,props.reset);
      }}
      title={props.size}
      disabled={!props.state}
    />
  );
}

const PressableSize = props => {
  return (
    <Pressable
      style={props.state? styles.button: styles.buttonDisable}
      onPress={() => {
        props.call(false, props.reset);
      }}
      disabled={!props.state}
    >
      <Text style={styles.textButton}>{props.size}</Text>
    </Pressable>
  );
}

const AdapterSize = props => {
  return (
    <View style={styles.size}>
      <PressableSize size='P' state={props.state} call={props.call} reset={props.reset} />
      <PressableSize size='M' state={props.state} call={props.call} reset={props.reset} />
      <PressableSize size='G' state={props.state} call={props.call} reset={props.reset} />
    </View>
  );
}

const Restart = props => {
  return (
    <View style={styles.container}>
      <Pressable
      style={styles.buttonRetire}
      onPress={() => {
        props.reset(true);
      }}
    >
      <Text style={styles.textReset}>Retire seu pedido</Text>
    </Pressable>
    </View>
  );
}

export const AdapterProduct = props => {
  const [getState, setState] = useState(true);
  const [getStatus, setStatus] = useState('Escolha um tamanho');

  const call = (state,reset_) => {
    setStatus('Preparando o pedido')
    setState(state)
    setTimeout(
      () => {
        setStatus('Finalizar pedido')
        setTimeout(
          () => {
            reset_(true)
          }, 5000
        )
      }, 5000
    )
  }

  const reset = state => {    
      setStatus('Escolha um tamanho')
      setState(state)    
  }

  return (
    <View style={styles.container}>
      <Image
        source={props.img}
        style={{ width: '100%', height: 200 }}
      />
      <Text  style={styles.text}>{props.name}</Text>
      <Text style={styles.textState}>{getStatus}</Text>
      <AdapterSize state={getState} call={call} reset={reset} />
      {
        (() => {
          if (getStatus == 'Finalizar pedido') {
            return (
              <Restart state={getState} reset={reset} />
            )
          }
          return null;
        })()
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginTop:10,
    marginHorizontal:'1%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    flex: 1,
    width: '100%',
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonRetire:{
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',    
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'bisque',
  },
  button:{
    alignItems: 'center',
    width: '33%',
    maxHeight:50,
    height:50,
    justifyContent: 'center',    
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'chocolate',
  },
  textState:{
    width: '100%',
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 0.25,      
    paddingVertical: 12,
    paddingHorizontal: 32,
  },  
  buttonDisable:{
    alignItems: 'center',
    justifyContent: 'center',   
    width: '33%', 
    height:50,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'sienna',
  },  
  textButton:{
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textReset:{
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'brown',
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,      
    paddingVertical: 12,
    color:'chocolate',
    paddingHorizontal: 32,
  }

});