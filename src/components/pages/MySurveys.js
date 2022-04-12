import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../store/surveys/reducer";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchSurveys()), []);

  const surveys = useSelector((state) => state.surveys);
  console.log(surveys);

  const surveysList = surveys.map((survey) => {
    return (
      <li key={survey.id}>
        <h3>{survey.name}</h3>
        <p>{survey.question_text}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>My surveys</h1>
      <ul>{surveysList}</ul>
    </div>
  );
}

export default Dashboard;
