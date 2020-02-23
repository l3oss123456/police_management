import axios from "axios"

const http = async (method, pathUrl, body) => {
    const url = "";
    try {
        const resp = await axios({
            url: `${url}${pathUrl}`,
            data: body, 
            method,
            headers: {
                Authorization: ""
            }
        })
        return resp
    }
    catch (error) {
        return error.response
    }
}
export default http