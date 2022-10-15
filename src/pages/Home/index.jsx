import Card from '../../components/Card';
import './Home.css';

import caloriesIcon from '../../assets/images/calories-icon.png'
import proteinIcon from '../../assets/images/protein-icon.png'
import carbsIcon from '../../assets/images/carbs-icon.png'
import fatIcon from '../../assets/images/fat-icon.png'



import { useParams } from "react-router";
import { useEffect, useState } from 'react';

import React from 'react';
import Error from '../Error';
import { getUserData } from '../../api/api';


function Home() {
  const [userData, setUserData] = useState()
  const { userId } = useParams()

  useEffect(() => {
    getUserData(userId).then(data => setUserData(data.data))
  }, []);

  if (userData) {
    return (

      <div className='container'>

        <div className='title'>
          <h1>Bonjour {userData?.userInfos.firstName},</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>

        <div className='home-row'>
          <div className='home-col-7'></div>
          <div className='home-col-3'>
            <Card img={caloriesIcon} number={userData?.keyData.calorieCount} type="Calories" measure="kCal"></Card>
            <Card img={proteinIcon} number={userData?.keyData.proteinCount} type="Proteines" measure="g"></Card>
            <Card img={carbsIcon} number={userData?.keyData.carbohydrateCount} type="Glucides" measure="g"></Card>
            <Card img={fatIcon} number={userData?.keyData.lipidCount} type="Lipides" measure="g"></Card>
          </div>
        </div>
      </div>
    );
  } else {
    return <Error />
  }

}

export default Home;
