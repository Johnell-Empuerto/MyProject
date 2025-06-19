// components/ProtectedRoute.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setIsClient(true);

    // Check for authToken cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const isLoggedIn = getCookie("authToken");

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  // Prevent rendering until client-side check is complete
  if (!isClient) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedRoute;