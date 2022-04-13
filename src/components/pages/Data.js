import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";

function Data() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);

  const responses = useSelector((state) => state.responses);
  console.log(responses);

  const responsesList = responses.map((response) => (
    <li key={response.id}>
      <p>
        score: {response.score}, comment: {response.comment}
      </p>
    </li>
  ));

  return (
    <div>
      <h1>My data</h1>
      <p>Scores</p>
      <ul>{responsesList}</ul>
    </div>
  );
}

export default Data;
