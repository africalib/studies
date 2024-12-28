import axios from "axios"

export default {
    async save(params) {
        const res = await axios.post("/v1/api/applications", params);
        return res.status === 201;
    }
}