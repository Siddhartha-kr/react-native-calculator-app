import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";


const screensize = 72;

const specialStyles = StyleSheet.create({
    OperatorButtons: {
        backgroundColor: '#404040',
    },
    OperatorButtonTransition: {
        backgroundColor: '#5d5d5d',  
    },
    OperatorLabel: {
        color: '#f1c84c',
        fontSize: 23,
    },
    NumberButtons: {
        backgroundColor: '#595959',
    },
    NumberLabels: {
        color: 'white',
        fontWeight: '400',
        fontSize: 25,
    },
    PercentageSign: {
        fontSize: 32,
    },
    EqualSign: {
        fontSize: 40,
    },
    DeciamlPoint: {
        fontSize: 50,
    },
    BackspaceSymbol : {
        fontSize: 34,
        color: '#f7cd4b',
    },
    MainNumber: {
        color: '#f7cd4b',
        fontSize: 70,  
        marginBottom: 1,
        // backgroundColor: 'white',
    },
    SecondaryNumber: {
        color: '#d4d4d4',
        fontSize: 25,
        // backgroundColor: 'pink',
    },
    Combined: {
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
    }

});

let prevOperand = "";
let currOperand = "";
let operation;


const HomeScreen = () => {
    function reset() {
        prevOperand = "";
        currOperand = "";
        operation = undefined;
    }
    function deletefunc(){
        currOperand = currOperand.toString().slice(0,-1);
    }
    function calculatorOperation() {
        let result;
        let prev = parseFloat(prevOperand);
        let current = parseFloat(currOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(operation){
            case "+":
                result = prev + current;
                break;
            
            case "-":
                result = prev - current
                break;
    
            case "×":
                result = prev * current;
                break;
    
            case "÷":
                result = prev / current;
                break;
            
            case "%":
                result = parseInt((prev / 100) * current);
                break;
    
            default:
                return;
        }
        currOperand = result;
        operation = undefined;
        prevOperand = "";
    }
    function pre_operation(operate){
        if(Main === "") return;
        if(Secondary !== "") {
            calculatorOperation();
        }
        operation = operate;
        prevOperand = currOperand;
        currOperand = "";
    }
    function addNumber(number) {
        if(number === "." && currOperand.toString().includes("."))return;
        currOperand = currOperand.toString() + number.toString();
    }
    function displayNum() {
        if(currOperand === Infinity)currOperand = "∞";
        setMain(currOperand.toString());
        if(operation !== undefined){
            setSecondary(`${prevOperand} ${operation.toString("en")}`);
        } else {
            setSecondary(prevOperand.toString());
        }
    }

    const [Main, setMain] = useState(prevOperand);
    const [Secondary, setSecondary] = useState(currOperand);

    const ButtonPressed = (num) => {
        addNumber(num);
        displayNum();
    };
    const DeleteButtonPressed = () => {
        deletefunc();
        displayNum();
    }
    const ResetButtonPressed = () => {
        reset();
        displayNum();
    }
    const ResultButtonPressed = () => {
        calculatorOperation();
        displayNum();
    }
    const OperatorButtonPressed = (operator) => {
        pre_operation(operator);
        displayNum();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Calculator</Text>
            <View style = {styles.SolutionBox}>
                <View style = {[styles.uppersection, specialStyles.Combined]}>
                    <Text style={specialStyles.MainNumber}>{Main}</Text>
                </View>
                <View style = {[styles.lowersection, specialStyles.Combined]}>
                    <Text style= {specialStyles.SecondaryNumber}>{Secondary}</Text>
                </View>
            </View>
            <View style= {styles.ButtonSpace}>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity onPress={() => ResetButtonPressed()}>
                        <View style = {[styles.Button, styles.ACbutton]}>
                            <Text style={[styles.ButtonLabel, styles.BlackTextStyle]}>AC</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => OperatorButtonPressed("%")}>
                        <View style = {[styles.Button, specialStyles.OperatorButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.PercentageSign]}>%</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => OperatorButtonPressed("÷")}>
                        <View style = {[styles.Button, specialStyles.OperatorButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.DeciamlPoint]}>&divide;</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => DeleteButtonPressed()}>
                        <View style = {[styles.Button, specialStyles.OperatorButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.BackspaceSymbol,]}>⌫</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity onPress={() => ButtonPressed(7)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>7</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(8)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>8</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(9)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>9</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => OperatorButtonPressed("×")}>
                        <View style = {styles.Button}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.EqualSign]}>×</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity onPress={() => ButtonPressed(4)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(5)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(6)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>6</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => OperatorButtonPressed("-")}>
                        <View style = {styles.Button}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.EqualSign]}>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity onPress={() => ButtonPressed(1)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(2)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(3)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => OperatorButtonPressed("+")}>
                        <View style = {[styles.Button]}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.EqualSign]}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.ButtonRow}>
                    <TouchableOpacity onPress={() => ButtonPressed(".")}>
                        <View style = {styles.Button}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel,specialStyles.DeciamlPoint]}>.</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(0)}>
                        <View style = {[styles.Button, specialStyles.NumberButtons]}>
                            <Text style={[styles.ButtonLabel, specialStyles.NumberLabels]}>0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ButtonPressed(0)}>
                        <View style = {styles.Button}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel]}>()</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => ResultButtonPressed()}>
                        <View style = {styles.Button}>
                            <Text style={[styles.ButtonLabel, specialStyles.OperatorLabel, specialStyles.EqualSign]}>=</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(46, 47, 48)',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    SolutionBox: {
        flexDirection: 'column-reverse',
        backgroundColor: '#595959',
        height: '30%',
        width: '90%', 
        borderRadius: 30,
        borderStyle: 'solid',
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 5,
    },
    uppersection: {
        height: '32%',
        marginBottom: 14,
    },
    lowersection: {
        height: '20%',
        marginBottom: 5,
    },
    heading: {
        paddingTop: 50,
        paddingBottom: 35,
        color: 'rgb(242, 201, 76)',
        fontSize: 26,
        fontWeight: 'bold',
    },
    ButtonSpace: {
        marginTop: 35,
        flex: 1,
        borderRadius: 10,
        width: '100%',
        backgroundColor: '#818181',
        paddingTop: 10,
        paddingBottom: 20,

    },
    Button: {
        backgroundColor: '#404040',
        alignItems: 'center',
        justifyContent: 'center',
        height: screensize,
        width: screensize,
        borderRadius: screensize/2,
        marginLeft: 22,
        marginTop: 15, 
    },
    ButtonLabel: {
        color: 'white',
        fontSize: 20,
    },
    ButtonRow: {
        flex: 1,
        flexDirection: 'row',
    },
    ACbutton: {
        color: 'black',
        backgroundColor: '#f2c94c',
    },
    BlackTextStyle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 27,
    },
});

