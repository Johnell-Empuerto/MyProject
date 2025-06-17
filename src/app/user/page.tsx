'use client';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type User = {
  Umt_Usercode: string;
  Umt_Userpswd: string;
  Umt_UserCostCenter: number;
  Umt_Usernumber: string;
  Umt_UserHandypin: string;
  Umt_userlname: string;
  Umt_userfname: string;
  Umt_usermi: string;
  Umt_Position: string;
  Umt_Email: string;
  Umt_usersupv: string;
  Umt_usermnt: string;
  Umt_imagepath: string;
  Umt_status: string;
  user_login: string;
  ludatetime: string;
  Umt_IsSystemAccount: boolean;
  Umt_PasswordExpired: boolean;
  Umt_LoginAttempts: number;
  Umt_PasswordChangeDate: string;
  Umt_IsLocked: boolean;
  Checksum: string;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/users'); // Ensure your API returns all 22 columns
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        if (data.success === false) throw new Error(data.error || 'API Error');
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="overflow-auto p-4">
      <Table>
        <TableCaption>Full user list from T_UserMaster</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User Code</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Cost Center</TableHead>
            <TableHead>User #</TableHead>
            <TableHead>Handy PIN</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>MI</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Mentor</TableHead>
            <TableHead>Image Path</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>User Login</TableHead>
            <TableHead>LU Datetime</TableHead>
            <TableHead>System Account?</TableHead>
            <TableHead>Password Expired?</TableHead>
            <TableHead>Login Attempts</TableHead>
            <TableHead>Password Change Date</TableHead>
            <TableHead>Is Locked?</TableHead>
            <TableHead>Checksum</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.Umt_Usercode}</TableCell>
              <TableCell>{user.Umt_Userpswd}</TableCell>
              <TableCell>{user.Umt_UserCostCenter}</TableCell>
              <TableCell>{user.Umt_Usernumber}</TableCell>
              <TableCell>{user.Umt_UserHandypin}</TableCell>
              <TableCell>{user.Umt_userlname}</TableCell>
              <TableCell>{user.Umt_userfname}</TableCell>
              <TableCell>{user.Umt_usermi}</TableCell>
              <TableCell>{user.Umt_Position}</TableCell>
              <TableCell>{user.Umt_Email}</TableCell>
              <TableCell>{user.Umt_usersupv}</TableCell>
              <TableCell>{user.Umt_usermnt}</TableCell>
              <TableCell>{user.Umt_imagepath}</TableCell>
              <TableCell>{user.Umt_status}</TableCell>
              <TableCell>{user.user_login}</TableCell>
              <TableCell>{user.ludatetime}</TableCell>
              <TableCell>{user.Umt_IsSystemAccount ? 'Yes' : 'No'}</TableCell>
              <TableCell>{user.Umt_PasswordExpired ? 'Yes' : 'No'}</TableCell>
              <TableCell>{user.Umt_LoginAttempts}</TableCell>
              <TableCell>{user.Umt_PasswordChangeDate}</TableCell>
              <TableCell>{user.Umt_IsLocked ? 'Yes' : 'No'}</TableCell>
              <TableCell>{user.Checksum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
