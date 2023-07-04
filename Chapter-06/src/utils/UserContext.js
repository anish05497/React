import { createContext } from 'react';


const UserContext = createContext({
    user:{
        name: "Anish Gupta",
        email: "anish.gupta05497@gmail.com"
    },
})

export default UserContext;