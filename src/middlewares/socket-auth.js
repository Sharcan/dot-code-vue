import axios from "axios";

export default async function socketAuth(socket) {
    const userId = localStorage.getItem('user');
    if(userId) {
        const user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data);
        if(user) {
            await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId, {
                socket_id: socket.client.id
            });
            return;
        }
    }
    const user = await axios.post(process.env.VUE_APP_API_URL + 'user', {
        socket_id: socket.client.id,
        is_guest: true
    }).then(res => res.data);
    localStorage.setItem('user', user.id);
}   