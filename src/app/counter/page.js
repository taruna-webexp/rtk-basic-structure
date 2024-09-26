"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import { decrement, fetchAllUsers, increment } from "@/redux/slice/userSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.user); // Access user state
  useEffect(() => {
    dispatch(fetchAllUsers()); // Dispatch the action to fetch users
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" component="h1" gutterBottom>
        Counter
      </Typography>
      {/* Counter Section */}
      <div className="flex flex-col items-center mt-8 p-4 border-t border-gray-300">
        <Typography variant="h5">Counter: {value}</Typography>
        <div className="flex space-x-4 mt-4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
