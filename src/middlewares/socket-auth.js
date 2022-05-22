import axios from "axios";

export default async function socketAuth(socket) {

    const userId = localStorage.getItem('user');
    sessionStorage.setItem('socket_id', socket.client.id);
    if(userId) {
        const user = await axios.get(process.env.VUE_APP_API_URL + 'user/' + userId).then(res => res.data)
            .catch(err => err);

        if('slug' in user) {
            // Update user socket_id
            await axios.patch(process.env.VUE_APP_API_URL + 'user/' + userId + '/socket', {
                socket_id: socket.client.id
            });
            // Connect socket to room
            if(user.room) {
                socket.client.emit('joinRoom', {
                    pin: user.room.pin
                });
            }
            return;
        }
    }

    const user = await axios.post(process.env.VUE_APP_API_URL + 'user/guest', {
        socket_id: socket.client.id,
        is_guest: true
    }).then(res => res.data);
    localStorage.setItem('user', user.id);
}   