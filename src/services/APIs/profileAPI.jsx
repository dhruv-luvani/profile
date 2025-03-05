export const getProfile = async () => {
    try {
        const response = await axios.get(`${API_URL}/profile`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}