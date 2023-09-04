import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import Starter from 'components/pages/Starter';
import Error404 from 'components/errors/Error404';

const FalconRoutes = () => {
  return (
    <Routes>
      <Route element={<ErrorLayout />}>
        <Route path="errors/404" element={<Error404 />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Starter />} />
        <Route path="pages/starter" element={<Starter />} />
      </Route>
      <Route path="*" element={<Navigate to="/errors/404" replace />} />
    </Routes>
  );
};

export default FalconRoutes;
