import { FETCH_ALBUMS } from "../constants/actionType";
import * as api from "../constants/api";

export const getAlbums = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAlbums(id);

    dispatch({ type: FETCH_ALBUMS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
