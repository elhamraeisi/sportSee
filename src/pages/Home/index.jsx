import Card from "../../components/Card";
import "./Home.css";

import caloriesIcon from "../../assets/images/calories-icon.png";
import proteinIcon from "../../assets/images/protein-icon.png";
import carbsIcon from "../../assets/images/carbs-icon.png";
import fatIcon from "../../assets/images/fat-icon.png";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import React from "react";
import Error from "../Error";
import { getUserActivity, getUserData, getUserPerformance } from "../../api/api";
import CustomBarChart from "../../components/BarChart";
import CustomRadarChart from "../../components/RadarChart";
import CustomRadialBarChart from "../../components/RadialBarChart";



function Home() {
  const [userData, setUserData] = useState();
  const [userActivityData, setUserActivityData] = useState();

  const [userPerformanceData, setUserPerformanceData] = useState();


  const { userId } = useParams();

  useEffect(() => {
    getUserData(userId).then((data) => setUserData(data.data));

    getUserActivity(userId).then((data) =>
      setUserActivityData(data.data.sessions)
    );
    getUserPerformance(userId).then((data) =>
      setUserPerformanceData(data.data)
    );
  }, []);

  if (userData) {
    return (
      <div className="container">
        <div className="title">
          <h1>Bonjour {userData?.userInfos.firstName},</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className="home-row">
          <div className="home-col-8 ">
            <div className="chart-container">
              <div className="row legends-container bar-card ">
                <div className="col activity-title">Activité quotidienne</div>
                <div className="col-4 legends">
                  <i className="circle black"></i>
                  Poids (kg)
                </div>
                <div className="col-4 legends">
                  <i className="circle red"></i>
                  Calories brûlées (kCal)
                </div>
              </div>
              <div className="bar-card">
                <CustomBarChart sessions={userActivityData}></CustomBarChart>
              </div>

              <div className="row">
                <div className="card-radarChart">
                  <CustomRadarChart data={userPerformanceData}></CustomRadarChart>
                </div>
                <div className="card-radialBarChart">
                  <CustomRadialBarChart></CustomRadialBarChart>
                </div>
              </div>
            </div>
          </div>
          <div className="home-col-2">
            <Card
              img={caloriesIcon}
              number={userData?.keyData.calorieCount}
              type="Calories"
              measure="kCal"
            ></Card>
            <Card
              img={proteinIcon}
              number={userData?.keyData.proteinCount}
              type="Proteines"
              measure="g"
            ></Card>
            <Card
              img={carbsIcon}
              number={userData?.keyData.carbohydrateCount}
              type="Glucides"
              measure="g"
            ></Card>
            <Card
              img={fatIcon}
              number={userData?.keyData.lipidCount}
              type="Lipides"
              measure="g"
            ></Card>
          </div>
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
}

export default Home;
