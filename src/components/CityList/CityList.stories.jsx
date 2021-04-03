import React from 'react';
import CityList from './CityList';
import {action} from '@storybook/addon-actions';

 export default {
    title: 'CityList',
    component: CityList
 }

 export const CityListExample = () => <CityList cities={[{city:"Guadalajara",country:"Mexico"},{city:"Acapulco",country:"Mexico"}]}
   onClickCity={action("Click on city")}
 />