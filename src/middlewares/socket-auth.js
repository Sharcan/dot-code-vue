import axios from "axios";

export default async function socketAuth(socket) {
    const userId = localStorage.getItem('user');
    if(userId) {
        const user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data)
        if(user) {
            axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId, {
                socket_id: socket.client.id
            });
            return;
        }
    }
    axios.post(process.env.VUE_APP_API_URL + 'user', {
        socket_id: socket.client.id,
        is_guest: true
    }).then(res => {
        const newId = res.data.raw[0].id;
        localStorage.setItem('user', newId);
    });
}   