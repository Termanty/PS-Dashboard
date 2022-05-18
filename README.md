# Promoter Score Dashboard Application (PS Dashboard)
The aim of NPS score application is to make user create their own survey just by embedding our open source code in their softwares, also be able to analyze and acting on their NPS feedback.

Used technologies: HTML, CSS, Javascript, React, Redux, MUI.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
## Dashboard 
1.npm install @mui/material @emotion/react @emotion/styled
2.npm install @mui/icons-material
3.npm install react-router-dom
4.npm install @mui/material @mui/styles

## Home page
By clicking "Home" at the left side bar,you will navigate to Home page. You can click "READ MORE" on each card to check out how to link your relevant web pages there.

## My survey page
By clicking "My Surveys" at the leftside bar, you will navigate to My surveys page, which is going to show you all the listed survey so far has been created and in use. By clicking "OPEN" button, you can navigate to the very surveys's data page. (More information about how to use Data page, please check Data page in details)

## Data page
By clicking "Data" at the leftside bar, you will navigate to Data page, where you can see how NPS scores and comments has been processed to data charts. 

### Fetures of Data page:


## Date Picker
User can use date picker to pick the starting date of the desired starting (left side date picker) and ending (right side date picker) date to check the data of NPS scores that they got.

## Total Responses
In "Total Responses" session, the total number of responses to your survey will appear based on your desired period of time.

## Pie Chart

In Pie chart, you can see NPS score in the middle of it. 

Green part shows amount of promoters. Red part shows detractors. Yellow part shows passives.

By hovering on green part, you see the amount of promoters. By clicking on green part, all the promoters' data will show up on the right side form. The form includes the date that user answered the survey, the score user gave, as well as comments. By clicking right arrow icon, you can navigate back to older data. The red and yellow part of the pie chart works same way as green part.


## The Broken Line Graph Chart
The Trend Chart (below Pie Chart) shows the trend of the NPS scores of all time.

## Response Volume Chart
The Response Volume Chart shows the volume of detractors, passives,  promoters and total responses in each volume. Based on total response showed, a line chart will show the trend of it.






