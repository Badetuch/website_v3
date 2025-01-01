import React, { useEffect, useState } from "react";

const OnlineUsers: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch("/api/teamspeak");
        const data = await response.json();

        if (data.error) {
          setHasError(true);
        } else {
          setOnlineUsers(data.onlineUsers || 0);
        }
      } catch {
        setHasError(true);
      }
    };

    fetchOnlineUsers();
  }, []);

  if (hasError || onlineUsers === null) {
    return <span>X</span>;
  }

  return <span>{onlineUsers}</span>;
};

export default OnlineUsers;
