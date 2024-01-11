import React, { useContext, useEffect, useState } from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';

const Parent = () => {
  useEffect(()=>{
    console.log("Parent Screen...");
  },[]);
  return <DrawerNavigator/>;
};

export default Parent;