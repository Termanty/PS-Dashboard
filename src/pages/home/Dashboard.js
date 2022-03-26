import styles from "./Dashboard.module.css";
import SurveyOutcome  from "./SurveyOutcome ";
import React from 'react';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                Information about Net promoter score
            </div>
            <div className={styles.sidebar}>
                <SurveyOutcome/>
            </div>
        </div>
    );
};

export default Dashboard;