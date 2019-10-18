import React, { useState } from "react";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(null);

  const handleUsernameChange = useCallback(event => {
    console.log(event.target.value);
    setUsername(event.target.value);
  }, []);

  const handleRoomChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async event => {
      event.preventDeafult();

      const data = await fetch("/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName
        }),

        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json());
      setToken(data.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  return <div></div>;
};

export default VideoChat;
