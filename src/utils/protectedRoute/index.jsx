import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

export default function ProtectedRoute({ children }) {
  const nav = useNavigate();
  const { user, loading } = useContext(UserContext);
  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "admin") {
        nav("/login");
      }
    }
  }, [user, loading, nav]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && user.role === "admin") {
    return children;
  }

  nav("/login");
  return null;
}
