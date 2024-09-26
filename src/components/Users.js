"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, fetchAllUsers } from "@/redux/slice/userSlice"; // Adjust the path accordingly
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading, error, value } = useSelector((state) => state.user); // Access user state
  useEffect(() => {
    dispatch(fetchAllUsers()); // Dispatch the action to fetch users
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <Typography
        className="text-center mb-8"
        variant="h4"
        component="h1"
        gutterBottom
      >
        Users List
      </Typography>
      {loading && <CircularProgress />} {/* Show loading indicator */}
      {error && <Typography color="error">Error: {error}</Typography>}{" "}
      {/* Show error message */}
      <TableContainer component={Paper} style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.length > 0 ? (
              users?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className="disabled"
                      onClick={() => console.log("Edit user", user.id)} // Placeholder for edit functionality
                    >
                      Edit
                    </Button>
                    <Button
                      className="disabled"
                      variant="contained"
                      color="secondary"
                      onClick={() => console.log("Delete user", user.id)} // Placeholder for delete functionality
                      style={{ marginLeft: "8px" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <Typography color="textSecondary">No users found.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
