import instance from "./axios";

export const login = (data) => {
    return instance.post("/login", data);
}

export const register = (data) => {
    return instance.post("/register", data);
}