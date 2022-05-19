# Promoter Score Dashboard Application (PS Dashboard)

The aim of NPS score application is to help users create their own survey just by embedding our open source code in their software also being able to analyze and access the NPS feedback.

Used technologies: **HTML, CSS, Javascript, React, Redux, MUI, MySQL, Node.js.**

---

## Available Scripts

In the project directory, you can run:

- ### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- ### `npm test`

Launches the test runner in the interactive watch mode.<br />

- ### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

It will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

---

## Dashboard

1. npm install @mui/material @emotion/react @emotion/styled
2. npm install @mui/icons-material
3. npm install react-router-dom
4. npm install @mui/material @mui/styles

---

## Home page

http://localhost:3000/

By clicking **"Home"** on the left side bar you will navigate to the Home page. You can also click **"READ MORE"** on each card to find out more about NPS score system and surveys. In the upper left corner there is a switch – you can choose dark or light mode.

![Home page](Home_page.png)

---

## My Surveys page

http://localhost:3000/MySurveys

By clicking **"My Surveys"** on the leftside bar you will navigate to My Surveys page which shows all the listed surveys that hav been created and are in use. The search line allows you to search for the survey based on its name. By clicking **"OPEN"** button you can navigate to the surveys's data page. (See more information in the **Data Page** section).

![My surveys](My_surveys.png)

---

## Data page

http://localhost:3000/Data

By clicking **"Data"** on the leftside bar you will navigate to the Data page where you can find both visual and numerical NPS score representation as well as comments left by the users.

### _Features of the Data page:_

Each part of the pie chart is coloured and it corresponds with the data of the NPS score and is reflected in the table on the right. If you click in the center of the pie chart you will get the overall data of the whole survey.

![Data page](Data_1.png)

### _Date Picker_

You can also the **date picker**: pick the starting date of the survey (left side date picker) and ending date (right side date picker) for checking the NPS score data of the designated period.

![Data page](Data_2.png)

### _Total Responses_

In **"Total Responses"** section the total number of the responses to your survey will appear based on the chosen timeframe.

### _Pie Chart_

The NPS score is shown in the middle of the **pie chart**. The amount of promoters is shown in **green** color while the amount of detractors and passives is shown in **blue** and **yellow** respectively.

By hovering over a green section, you can see the amount of promoters. By clicking on the green section all the promoters' data will show up in the table on the right side. The table includes the date when the user answered a survey, the score the user gave and the comments left by the user. By clicking on the right arrow icon you can navigate back to older data. The red and yellow sections of the pie chart work the same way as described previously.

### _Line Graph Chart_

The **Line Chart** (located below the pie chart) shows the trend of the NPS scores of all time.

### _Response Volume Chart_

The **Response Volume Chart** shows the volume of detractors, passives, promoters and total responses in each volume. Based on the total responses showed a line chart will show the response trend.

![Data page](Data_3.png)

---

## Embed page

http://localhost:3000/Embed

The **Embed page** generates either the **direct link** (on the left) opens up a web page where a user can fill in the survey. or **embed script** (on the right) which allow users to copy the HTML snippet and embed it into their own web application.

![Direct link](Embed_1.png)
![Embed script](Embed_2.png)

---

## Create new survey page

http://localhost:3000/CreateNewSurvey

By clicking on **"Create new survey page"** on the left side bar you will navigate to a single survey creation page. Fill in the **survey name** and leave a **survey question** in order to finalize the survey description.

![New survey](Create_new_survey.png)

---

# The project was created by:

- [Tero Mäntylä](https://github.com/Termanty)
- [Altynay Sabitzhan](https://github.com/Altynay-ayyao)
- [Femi Adesola Oyinloye](https://github.com/FemiAdesola)
- [Naik Shubhangi](https://github.com/shubhanginaik)
- [Maria Pokryshkina](https://github.com/mariapokryshkina)
