// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyADR1UMxnEkWcTY7likgDsMQITFybRNNwc",
//     authDomain: "consecionaria-8cfdc.firebaseapp.com",
//     projectId: "consecionaria-8cfdc"
// });

// export const Home = () => {
//     return (
//         <div>
//             <div>
//                 <h1>Wellcome!</h1>
//             </div>
//             <div className='text-center'>
//                 <Link to="/login">Sair</Link>
//             </div>

//         </div>
//     );
// };


import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB9OxIrcosvNSnv6-vD03FBT3JOLy2JlIs",
    authDomain: "faculdade-13c0b.firebaseapp.com",
    projectId: "faculdade-13c0b"
});

export const Home = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassord, setConfirmPassord] = useState("");
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseApp);
    const usersCollectionRef = collection(db, "users");

    async function criarDado() {
        try {
            const user = await addDoc(collection(db, "users"), {
                firstName,
                lastName,
                email,
                password,
                confirmPassord,
            });

            console.log("dados salvos com sucessos", user);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    async function deleteUser(id) {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }

    return (
        <div>
            <ul>
                {users.map((user) => {
                    return (
                        <>
                            <li>{user.firstName}</li>
                            <li>{user.lastNamee}</li>
                            <li>{user.email}</li>
                            <li>{user.password}</li>
                            <li>{user.confirmPassord}</li>
                            <button onClick={() => deleteUser(user.id)}>Deletar</button>
                        </>
                    );
                })}
            </ul>
            <div className='text-center'>
                <Link to="/login">Return</Link>
            </div>

        </div>
    );
};
