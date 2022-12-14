import React from "react";

const AuthContext = React.createContext()

const AuthProvider = ({children, value}) => {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthValue = () => {
    return React.useContext(AuthContext)
}

export { useAuthValue, AuthProvider }