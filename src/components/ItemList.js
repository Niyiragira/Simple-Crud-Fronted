import React from 'react';
import ItemCard from './ItemCard';
import { Grid, Typography } from '@mui/material';

const ItemList = ({ items, onEdit, onDelete }) => (
  <Grid container spacing={2} justifyContent="center">
    {items.length === 0 ? (
      <Grid item xs={12}>
        <Typography align="center">No items found.</Typography>
      </Grid>
    ) : (
      items.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <ItemCard item={item} onEdit={onEdit} onDelete={onDelete} />
        </Grid>
      ))
    )}
  </Grid>
);

export default ItemList; 