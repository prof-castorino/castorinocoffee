import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export const AdapterModal = props => {
    const Restart = props => {
        return (
            <Pressable
                style={styles.buttonRetire}
                onPress={() => {
                    props.reset(true);                    
                }}
            >
                <Text style={[styles.button, styles.buttonClose]}>Retirado!</Text>
            </Pressable>
        );
    }
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    props.setModalVisible(!props.modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Retire seu pedido</Text>
                        <Restart reset={props.reset} modalVisible={props.modalVisible} />                        
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
    },
    buttonClose: {
        backgroundColor: 'bisque',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});