import axios from 'axios';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  CREATE_ITEM_REQUEST,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE
} from '../types/itemTypes';

const API_URL = 'https://simple-crud-and-upload-production.up.railway.app/items';

export const fetchItems = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEMS_REQUEST });
  try {
    const { data } = await axios.get(API_URL);
    dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
  }
};

export const createItem = (formData) => async (dispatch) => {
  dispatch({ type: CREATE_ITEM_REQUEST });
  try {
    const { data } = await axios.post(API_URL, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    dispatch({ type: CREATE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ITEM_FAILURE, payload: error.message });
  }
};

export const updateItem = (id, formData) => async (dispatch) => {
  dispatch({ type: UPDATE_ITEM_REQUEST });
  try {
    const { data } = await axios.put(`${API_URL}/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    dispatch({ type: UPDATE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_ITEM_FAILURE, payload: error.message });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM_REQUEST });
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_ITEM_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_ITEM_FAILURE, payload: error.message });
  }
}; 