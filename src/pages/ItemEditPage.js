import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItem } from '../redux/actions/itemActions';
import { useNavigate, useParams } from 'react-router-dom';
import ItemForm from '../components/ItemForm';
import { Container, Typography, Alert } from '@mui/material';

const ItemEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { items, loading, error } = useSelector(state => state.items);
  const item = items.find(i => String(i.id) === String(id));

  const handleSubmit = async (formData) => {
    await dispatch(updateItem(id, formData));
    navigate('/');
  };

  if (!item) return <Container maxWidth="sm" sx={{ mt: 4 }}><Alert severity="error">Item not found.</Alert></Container>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" mb={2}>Edit Item</Typography>
      <ItemForm initialValues={item} onSubmit={handleSubmit} loading={loading} isEdit />
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </Container>
  );
};

export default ItemEditPage; 