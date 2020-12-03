import AsyncStorage from '@react-native-community/async-storage';
const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    ckeckToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },

    signIn: async (email, password) => {

        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await req.json();
        return json;
    },

    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await req.json();
        return json;
    },

    logout: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        });
        const json = await req.json();
        return json;
    },

    getBarbers: async (lat = null, lng = null, address = null) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const json = await req.json();
        return json;
    },

    getBarber: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/barber/${id}?token=${token}`);
        const json = await req.json();
        return json;
    },

    search: async (barberName) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/search?q=${barberName}&token=${token}`);
        const json = await req.json();
        console.log(json);
        return json;
    },

    setFavorite: async (barberId) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/user/favorite`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, barber: barberId })
        });

        const json = await req.json();
        return json;
    },

    setAppointment: async (userId,
        service,
        year,
        month,
        day,
        hour) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/barber/${userId}/appointment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                service,
                year,
                month,
                day,
                hour
            })
        });
        const json = await req.json();        
        return json;
    },

    getFavorites: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/favorites?token=${token}`);
        const json = await req.json();
        return json;
    },

    getAppointments: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/appointments?token=${token}`);
        const json = await req.json();
        return json;
    },

    getUser: async (body) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user?token=${token}`);
        const json = await req.json();
        console.log(body);
        return json;
    },

    updateUser: async (body) => {
        const token = await AsyncStorage.getItem('token');
        body.token = token;
        const req = await fetch(`${BASE_API}/user`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const json = await req.json();        
        return json;
    },
};