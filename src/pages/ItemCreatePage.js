import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createItem } from '../redux/actions/itemActions';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { Container, Typography, Alert } from '@mui/material';

const ItemCreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.items);

  const handleSubmit = async (formData) => {
    await dispatch(createItem(formData));
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" mb={2}>Create Item</Typography>
      <ItemForm onSubmit={handleSubmit} loading={loading} />
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </Container>
  );
};

export default ItemCreatePage; 