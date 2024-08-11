import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);
const token = localStorage.getItem('token');
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);


    const getQuizData = () => {
        const Name = localStorage.getItem('Name');
        const Email = localStorage.getItem('Email');
        const quizScore = localStorage.getItem('quizScore');
        const quizData = localStorage.getItem('quizData');

        return { Name, Email, quizScore, quizData };
    };


    const storeTokenInLs = (serverToken, userName, Email) => {
        localStorage.setItem("token", serverToken);
        localStorage.setItem("Name", userName);
        localStorage.setItem("Email", Email);
        setIsAuthenticated(true);
    };

    const QuizData = (score, results) => {
        localStorage.setItem("quizScore", score);
        localStorage.setItem("quizData", results);
    };

    const removeTokenFromLs = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, storeTokenInLs, removeTokenFromLs, QuizData, getQuizData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
