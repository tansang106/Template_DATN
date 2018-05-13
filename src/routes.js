import React, { Component } from 'react';
import CoffeeShopList from './Components/CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './Components/CoffeeShop/CoffeeShopDetail';
import Invoice from './Components/Invoice/Invoice';
import NotFound from './Components/404/NotFound';
import EmployeeList from './Components/Employee/EmployeeList';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />,
        
    },
    {
        path: '/coffeeshop',
        exact: false,
        main: () => <CoffeeShopList />
    },
    {
        path: '/coffeegrid',
        exact: false,
        main: ({match, location}) => <CoffeeShopGrid match={match} location={location}/>
    },
    {
        path: '/coffeedetail',
        exact: true,
        main: () => <CoffeeShopDetail />
    },
    {
        path: '/invoice',
        exact: false,
        main: ({location}) => <Invoice location={location}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
   
    
];

export default routes;