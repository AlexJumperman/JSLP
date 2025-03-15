# Task
- Create a NodeJS command-line app that reads a text file, analyzes its content, and provides some metrics of the file. In this app, you’ll make use of custom modules, core Node.js modules, file operations, and error handling.
### (1) Functionalities
- The application should accept a file path as a command-line argument and read the content of the file.
- The application should provide a summary of the text file, including the total number of words and the frequency of each word.
- The application should handle errors such as file not found, permission issues, and invalid input. Providing a clear message to the user.
- The application should display the user's operating system information before the analysis summary.
### (2) Setup
- Install Node.js using NVM and create a new project with npm init.
- Create the main js file to be the app entry point - such as app.js or main.js.
- Create a src directory with two files: fileReader.js and dataProcessor.js
- fileReader.js should export a function that reads the txt file input.
- dataProcessor.js should export a function that analyzes the text and returns an object with its data (total number of words and the frequency of each word).
- You can use the module fs for file reading, and os to get the operating system information.
- Create a README.md file explaining how to run the command-line app.
### Input example
```
Hello world, hello!
This is a simple text file.
This file is used to demonstrate a simple NodeJS app.
```
### Expected output
```
Operating System: Linux
Analysis Summary:
- Total number of words: 16
- Word Frequencies:
    - hello: 2
    - world: 1
    - this: 2
    - is: 2
    - a: 2
    - simple: 2
    - text: 2
    - file: 2
    - used: 1
    - to: 1
    - demonstrate: 1
    - nodejs: 1
    - app: 1
```

# App

1. Install Node.js using NVM:
   ```sh
   nvm install node

2. Run app with command:
   ```sh
   node app.js example.txt