import { FETCH_ALBUMS, FETCH_PHOTOS } from "../constants/actionType";
import * as api from "../constants/api";

export const getAlbums = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAlbums(id);

    dispatch({ type: FETCH_ALBUMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPhotos = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPhotos(id);

    dispatch({ type: FETCH_PHOTOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
