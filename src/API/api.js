import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "3b6c42ad-08c1-4c77-9f1f-e69678f4c088" },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count = ${pageSize}`)
        .then (responce =>{
            return responce.data;})
    }
}

// export const getUsers2 = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance.get(baseUrl +`follow??page=${currentPage}&count = ${pageSize}`)
//         .then (responce =>{
//             return responce.data;})
//     }
// }