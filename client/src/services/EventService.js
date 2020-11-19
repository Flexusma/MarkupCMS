import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("http://localhost:3000/events");
    return res.data;
  },
  async getEventSingle(eventId, accessToken) {
    let res = await axios.get("http://localhost:3000/events/" + eventId, {
        headers: {
            Authorization: `${accessToken}`
        }
    });
    return res.data;
  }
}