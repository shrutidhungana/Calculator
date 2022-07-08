import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Vibration
    
} from 'react-native';

import Colors from '../constants/Colors';

const CalculatorScreen = (props) => {

    const [currNumber, setCurrNumber] = useState('');
    const [lastNumber, setLastNumber] = useState('');

    const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

    const Calculator = () => {
        let lastArray = currNumber[currNumber.length - 1]
        

        if (lastArray === '/' || lastArray === '*' || lastArray === '-' || lastArray === '+' || lastArray === '.') {
            setCurrNumber(currNumber)
            return;
        }
        else {
            let result = eval(currNumber).toString();
            setCurrNumber(result)
            return;
        }
    }
    

     const handleInput =(buttonPressed) =>{
        if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
            
            setCurrNumber(currNumber + buttonPressed)
            return;
          }
          else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
                  buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 || buttonPressed === '.' ) {
            Vibration.vibrate(35);
          }
          switch(buttonPressed) {
              case 'DEL':
                  Vibration.vibrate(30)
              
                  setCurrNumber(currNumber.substring(0, (currNumber.length - 1)))
                  return;
              case 'C':
                  Vibration.vibrate(30)
                  setLastNumber('')
                  setCurrNumber('')
                  return;
              case '=':
                  Vibration.vibrate(30)
                  setLastNumber(currNumber + '=')
                  Calculator()
                  return;
          }
          setCurrNumber(currNumber + buttonPressed)
        }
        
    


    return (
        
        <View>
            <View style = {styles.results}>
            
                <Text style={styles.historyText}>
                    {lastNumber}
                    </Text>
                <Text style={styles.resultText}>
                    {currNumber}
                    </Text>
            
            </View>
            <View style={styles.buttons}>
        {buttons.map((button) =>
            button === '=' || button === '/' || button === '*' || button === '-' || button === '+' ?
                
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#00b9d6'} ]} onPress={() => handleInput(button)}>
                    <Text style={[styles.textButton, { color: 'white', fontSize: 28 }]}>
                        {button}
                    </Text>
                    </TouchableOpacity>
                    
          :
          button === 0 ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ?  '#303946' :'#00b9d6', minWidth: '36%'} ]} onPress={() => handleInput(button)}>
                        <Text style={styles.textButton}>
                            {button}
                        </Text>
          </TouchableOpacity>
          :
          button === '.' || button === 'DEL' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: button === '.' ?'#303946' : '#ededed', minWidth: '37%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'C' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ?  '#303946':'#ededed', minWidth: '36%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? '#303946' :   '#ededed' } ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
            </View>
            
  )
}

const styles = StyleSheet.create({
    results: {
        backgroundColor: Colors.accent,
        maxWidth: '100%',
        minHeight: '30%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',

    },

    resultText: {
        maxHeight: 45,
        color: Colors.secondary,
        margin: 15,
        fontSize: 35,
    },

    historyText: {
        color: Colors.tertiary,
        fontSize: 20,
        marginRight: 10,
        alignSelf: 'flex-end',
    },

    theme: {
        alignSelf: 'flex-start',
        bottom: '5%',
        margin: 15,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    
    buttons: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
    button: {
        borderColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
        flex: 2,
      fontSize: 20,
    },
    textButton: {
        color: '#7c7c7c',
        fontSize: 28,
      }
    
})


export default CalculatorScreen