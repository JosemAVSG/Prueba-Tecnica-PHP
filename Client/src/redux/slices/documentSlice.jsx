import { createSlice } from "@reduxjs/toolkit";
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../../api/documents";
const initialState = {
  documents: [],
  loading: false,
  error: null,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    getDocumentsStart: (state) => {
      state.loading = true;
    },
    getDocumentsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        documents: action.payload,
      };
    },

    createDocumentSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        documents: action.payload,
      };
    },

    getDocumentsFail: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const getDocumentsRequest = () => {
  return async (dispatch) => {
    dispatch(getDocumentsStart());
    try {
      const res = await getDocuments();
      dispatch(getDocumentsSuccess(res.data));
    } catch (error) {
      dispatch(getDocumentsFail(error));
    }
  };
};

export const createDocumentRequest = (data) => {
  return async (dispatch) => {
    dispatch(getDocumentsStart());
    try {
      const res = await createDocument(data);
      dispatch(createDocumentSuccess(res.data));
    } catch (error) {
      dispatch(getDocumentsFail(error));
    }
  };
};

export const updateDocumentRequest = (id, data) => {
  return async (dispatch) => {
    dispatch(getDocumentsStart());
    try {
      const res = await updateDocument(id, data);
      dispatch(getDocumentsSuccess(res.data));
    } catch (error) {
      dispatch(getDocumentsFail(error));
    }
  };
};

export const deleteDocumentRequest = (id) => {
  return async (dispatch) => {
    dispatch(getDocumentsStart());
    try {
      const res = await deleteDocument(id);
      dispatch(getDocumentsSuccess(res.data));
    } catch (error) {
      dispatch(getDocumentsFail(error));
    }
  };
};




export const {
  getDocumentsStart,
  getDocumentsSuccess,
  getDocumentsFail,
  createDocumentSuccess,
} = documentSlice.actions;
export default documentSlice.reducer;
