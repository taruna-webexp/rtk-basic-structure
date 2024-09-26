"use client";
import { store } from "@/redux/store";
import "./globals.css";
import { Provider } from "react-redux";
import Navbar from "@/components/common/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
