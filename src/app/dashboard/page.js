"use client";
// pages/yourPage.js
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Chat from "../components/ui/chat"
import Pdf from "../components/ui/pdf";

export default function YourPage() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? (
    <div className="bg-white overflow-hidden h-screen text-black">
      <Header className="sticky" />
      <div className="flex bg-gray-200">
        {/* <Sidebar /> */}
        <div className="w-2/4 border-r resize-x  border-black min-h-dvh bg-gray-100 flex flex-col">
          <Chat />
        </div>
        <div className="w-2/4 overflow-auto">
          <Pdf />
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white text-black">
      You have to <LoginLink>Login</LoginLink> to see this page
    </div>
  );
}