import axios from "axios"

export default {
    async readAll() {
        const res = await axios.get("/v1/api/forms");
        return res.data;
    },

    async read(id) {
        const res = await axios.get(`/v1/api/forms/${id}`);
        return res.data;
    }
}