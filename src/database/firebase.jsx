import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const auth = getAuth();

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyB9OxIrcosvNSnv6-vD03FBT3JOLy2JlIs",
    authDomain: "faculdade-13c0b.firebaseapp.com",
    projectId: "faculdade-13c0b"
});
