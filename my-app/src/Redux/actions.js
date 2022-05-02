// action types
export const LOGIN ="LOGIN"
export const LOGOUT = "LOGOUT"

export const login = (data)=>{
    return {
        type: LOGIN,
        payload:data
    }
}
// Action Creators
export const logout = (data)=>{
    return {
        type: LOGOUT,
        payload:data
    }
}