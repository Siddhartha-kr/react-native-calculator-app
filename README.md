# React Native Modern Calculator 

A sleek, dark-themed calculator application built with **React Native**. This project features a custom UI with a responsive button grid and a dual-display logic for tracking current and previous operands.

##  Features

* **Custom Styling:** A modern interface using `StyleSheet` with specific color palettes for operators and numbers.
* **Dual Display:** * **Main Display:** Shows the current number being typed or the final result.
    * **Secondary Display:** Shows the previous operand and the selected operator, providing context for the current calculation.
* **Core Math Logic:** Supports Addition, Subtraction, Multiplication, Division, and Percentage.
* **Safety Checks:** Prevents multiple decimal points in a single number and handles "Infinity" results (like division by zero) gracefully.
* **Memory Functions:** Includes an `AC` (All Clear) button to reset and a backspace (`⌫`) feature for easy corrections.

##  Visuals

Here is a look at the application in action.

| Initial State / Typing | Result Display |
| :---: | :---: |
| <img src="https://github.com/Siddhartha-kr/react-native-calculator-app/raw/main/screenshots/Screenshot 1.jpeg" width="300" alt="Calculator App Screenshot 1" /> | <img src="https://github.com/Siddhartha-kr/react-native-calculator-app)/raw/main/screenshots/Screenshot 2.jpeg" width="300" alt="Calculator App Screenshot 2" /> |


##  Built With

* [React Native](https://reactnative.dev/)
* [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Project Structure

To keep the repository clean and optimized, the following directories are excluded:
* `/node_modules`: Can be regenerated using `npm install`.
* `.expo`: Local development cache, regenerated automatically when running `npx expo start`.
##  Getting Started

### Prerequisites
* **Node.js** installed on your machine.
* **React Native CLI** or **Expo CLI** (depending on your environment).
* **Android Studio** (for Android Emulator) or **Xcode** (for iOS Simulator).

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [(https://github.com/Siddhartha-kr/react-native-calculator-app.git)]
