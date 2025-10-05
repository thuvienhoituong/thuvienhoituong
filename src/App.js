import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

import { publicRoutes, privateRoutes } from '~/routes';
import Context from './Context';
import './App.scss';
import dataLocal from '~/data/data';
// import dataLocal from '~/data/category';

const firebaseConfig = {
  apiKey: 'AIzaSyB8wcS-U7yY-GlCQLWUnN395Uqc0XfLSD0',
  authDomain: 'thuvienhoituong-fpt.firebaseapp.com',
  databaseURL: 'https://thuvienhoituong-fpt-default-rtdb.firebaseio.com',
  projectId: 'thuvienhoituong-fpt',
  storageBucket: 'thuvienhoituong-fpt.appspot.com',
  messagingSenderId: '927891572614',
  appId: '1:927891572614:web:aa61ad1cf954a00aefce07',
  measurementId: 'G-C2M2WZ68J3',
};

initializeApp(firebaseConfig);

const isAuthenticated = false; // Replace this with your actual authentication logic

const RedirectComponent = () => {
  return <Navigate to="/login" />;
};

const getCategory = () => {
  const [data, setData] = useState(dataLocal);
  const itemCategoryStr = localStorage.getItem('category');
  const database = getDatabase();
  const dataRef = ref(database, 'category');

  useEffect(() => {
    if (itemCategoryStr) {
      const itemCategory = JSON.parse(itemCategoryStr);
      setData(itemCategory);
    }

    get(dataRef)
      .then((snapshot) => {
        const category = snapshot.val();
        setData(category);
        localStorage.setItem('category', JSON.stringify(category));
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      // Mã lệnh thực thi khi component bị unmount hoặc các dependency thay đổi trước lần render tiếp theo
    };
  }, []);

  return data;
};

function App() {
  return (
    <Context.Provider value={getCategory()}>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return isAuthenticated ? (
              <Route key={index} path={route.path} element={<Page />} />
            ) : (
              <Route key={index} path={route.path} element={<RedirectComponent />} />
            );
          })}
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
