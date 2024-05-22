import instance from "./axios";

export const createDocument = (data) => {
    return instance.post("/documents", data);
}

export const getDocuments = () => {
    return instance.get("/documents");
}
export const getDocument = (id) => {
    return instance.get(`/documents/${id}`);
}

export const deleteDocument = (id) => {
    return instance.delete(`/documents/${id}`);
}

export const updateDocument = (id, data) => {
    return instance.put(`/documents/${id}`, data);
}