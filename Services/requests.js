import axios from "axios";
const getChatbotReply1 = async (message) => {
    const response = await axios.get("https://coinstack-backend.vercel.app/api/hello", JSON.stringify({
        message
    }));
    console.log("In a request: "+response?.data?.result);
    return response?.data?.result;

}
export { getChatbotReply1 };