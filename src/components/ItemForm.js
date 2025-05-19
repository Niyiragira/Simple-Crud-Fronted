import React, { useState } from 'react';
import { TextField, Button, Box, Alert, CircularProgress, Typography } from '@mui/material';

const ACCEPTED_TYPES = ['image/png', 'image/jpeg', 'image/bmp'];

const ItemForm = ({ initialValues = {}, onSubmit, loading, isEdit }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !ACCEPTED_TYPES.includes(file.type)) {
      setError('Only PNG, JPEG, and BMP files are allowed.');
      setImage(null);
    } else {
      setError('');
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required.');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) formData.append('image', image);
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" align="center">{isEdit ? 'Edit Item' : 'Create Item'}</Typography>
      <TextField
        label="Name*"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        multiline
        rows={3}
        fullWidth
      />
      <Button
        variant="contained"
        component="label"
      >
        Upload Image (PNG, JPEG, BMP)
        <input
          type="file"
          accept="image/png,image/jpeg,image/bmp"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
      <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 2 }}>
        {loading ? <CircularProgress size={24} color="inherit" /> : (isEdit ? 'Update' : 'Create')}
      </Button>
    </Box>
  );
};

export default ItemForm; 