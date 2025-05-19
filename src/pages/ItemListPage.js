import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../redux/actions/itemActions';
import { useNavigate } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { Container, Typography, Button, Snackbar, Alert, CircularProgress, Box } from '@mui/material';

const ItemListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector(state => state.items);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleEdit = (item) => {
    navigate(`/edit/${item.id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this item?')) {
      dispatch(deleteItem(id));
      setSnackbar({ open: true, message: 'Item deleted successfully!', severity: 'success' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">Items</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/create')}>
          Create New Item
        </Button>
      </Box>
      {loading && <Box display="flex" justifyContent="center" my={4}><CircularProgress /></Box>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ItemListPage; 