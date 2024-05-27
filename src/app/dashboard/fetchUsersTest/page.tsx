"use client"

import { useEffect, useState } from "react";
import { fetchUsers } from "@/lib/data";

const FetchUsersTest: React.FC = () => {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const fetchedUsers = await fetchUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>{user}</div>
            ))}
        </div>
    );
};

export default FetchUsersTest;
