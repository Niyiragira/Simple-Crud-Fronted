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

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
    case CREATE_ITEM_REQUEST:
    case UPDATE_ITEM_REQUEST:
    case DELETE_ITEM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case CREATE_ITEM_SUCCESS:
      return { ...state, loading: false, items: [...state.items, action.payload] };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case FETCH_ITEMS_FAILURE:
    case CREATE_ITEM_FAILURE:
    case UPDATE_ITEM_FAILURE:
    case DELETE_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
} 