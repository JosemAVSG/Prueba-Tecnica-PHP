import { createSlice } from "@reduxjs/toolkit";
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
  // getTiposyProcesos,
} from "../../api/documents";
const initialState = {
  documents: [],
  loading: false,
  error: null,
  tipoDocumento: null,
  procesoDocument: null,
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
        documents: action.payload.documents,
        tipoDocumento: action.payload.tiposDocumentos,
        procesoDocument: action.payload.procesos,
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
        console.log(res.data)
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
       await deleteDocument(id);
       const data = await getDocuments();
        dispatch(getDocumentsSuccess(data.data));
        
      
      
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
  setTipoyProceso,
} = documentSlice.actions;
export default documentSlice.reducer;
