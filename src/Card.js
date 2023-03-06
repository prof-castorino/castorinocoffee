import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const PressableSize = props => {
  return (
    <View style={{ width: props.size}}>
      <Pressable
        style={props.state? styles.button: [styles.button, styles.buttonDisable]}
        onPress={() => {
          props.call(false, props.time);
        }}
        disabled={!props.state}
      >
        <Text style={styles.textButton}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const AdapterSize = props => {
  const total = 100/props.size.length
  const size = String(total-1) + '%'
  
  return (
    <View style={styles.size}>
      {props.size.map(
          (item) => 
            <PressableSize 
              key={item.title}
              size={size}
              title={item.title} 
              time={item.time} 
              state={props.state} 
              call={props.call}  />
          )
      }
    </View>
  );
}

export const AdapterProduct = props => {
  return (
    <View style={styles.container}>
      <Image
        source={props.img}
        style={{ width: '100%', height: 200 }}
      />
      <Text  style={styles.text}>{props.name}</Text>      
      <AdapterSize state={props.getState} call={props.call} size={props.size} />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  button:{
    alignItems: 'center',
    width: '100%',
    maxHeight:50,
    height:50,
    justifyContent: 'center',    
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'chocolate',
  }, 
  buttonDisable:{
    backgroundColor: 'sienna',
  },  
  textButton:{
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,      
    paddingVertical: 12,
    color:'chocolate',
  }
});