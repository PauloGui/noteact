import React, { useContext, createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {

  const [authUser, setAuthUser] = useState({ authenticated: false });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider.');
  return context;
}

export default AuthProvider;