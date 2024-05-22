import instance from "./axios";

export const createDocument = (data) => {
    return instance.post("/document", data);
}

export const getDocuments = () => {
    return instance.get("/documents");
}
export const getDocument = (id) => {
    return instance.get(`/documents/${id}`);
}

export const deleteDocument = (id) => {
    return instance.delete(`/document/${id}`);
}

export const updateDocument = (id, data) => {
    return instance.put(`/documents/${id}`, data);
}

