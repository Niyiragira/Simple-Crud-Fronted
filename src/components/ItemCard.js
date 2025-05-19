import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

const ItemCard = ({ item, onEdit, onDelete }) => (
  <Card sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
    {item.image_url && (
      <CardMedia
        component="img"
        height="140"
        image={item.image_url}
        alt={item.name}
        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
      />
    )}
    <CardContent>
      <Typography variant="h6">{item.name}</Typography>
      <Typography variant="body2" color="text.secondary">{item.description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={() => onEdit(item)}>Edit</Button>
      <Button size="small" color="error" onClick={() => onDelete(item.id)}>Delete</Button>
    </CardActions>
  </Card>
);

export default ItemCard; 