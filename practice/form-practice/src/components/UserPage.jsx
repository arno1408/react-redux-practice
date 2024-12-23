import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { RoleContext } from "./RoleProvider";
import axios from "axios";

function UserPage() {
  const { id } = useParams();
  const { user } = useContext(RoleContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setProfile(response.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };

    if (user.role === "admin" || user.id === parseInt(id)) {
      fetchProfile();
    }
  }, [id, user]);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{profile.role === "user" ? "User Profile" : "Admin Profile"}</h1>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default UserPage;
