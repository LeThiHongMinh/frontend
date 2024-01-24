import React from 'react';
import { useAppState } from '../AppState';

interface SessionProps {
    // Define the specific props for your Session component
}

export default function Auth() {
    
}

// const Auth: React.FC<SessionProps> = (props) => {
//     const type = props.match.params.form;
//     const [formData, setFormData] = React.useState({
//         name:""
//     });
//     const [userData, setUserData] = React.useState(null);
//     const { dispatch } = useAppState();
//     React.useEffect(() => {
//         if (userData) {
//             console.log(userData);
//             const { token, user } = userData;
//             dispatch({ type: "auth", payload: {token, name: user.username }})
//         }
//     }, [userData]);
//     const actions = {
//         signup: {
//             type: "signup",
//             payload: formData
//         }, 
//         login: {
//             type: "login",
//             payload: formData
//         }
//     }

//     const handleChange = (event) => {
//         setFormData(...formData, {[event.target.name]: event.target.value});
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(dispatch, actions[type])
//         dispatch(actions[type]);
//     }

//     return (
//         <>
//         <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" value={formData.name} onChange={handleChange}></input>
//             <input type="submit" value={type}></input>
//         </form>
//         </div>
//         </>
//     );
// }
// export default Auth;
