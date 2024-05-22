import instance from "./axios";

export const login = (data) => {
    return instance.post("/login", data);
}

export const register = (data) => {
    return instance.post("/register", data);
}
export const logout = () => {
    return instance.get("/logout",{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
}   