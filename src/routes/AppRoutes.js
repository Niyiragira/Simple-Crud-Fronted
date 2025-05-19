import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListPage from '../pages/ItemListPage';
import ItemCreatePage from '../pages/ItemCreatePage';
import ItemEditPage from '../pages/ItemEditPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListPage />} />
      <Route path="/create" element={<ItemCreatePage />} />
      <Route path="/edit/:id" element={<ItemEditPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes; 