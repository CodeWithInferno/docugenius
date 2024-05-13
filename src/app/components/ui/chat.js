'use client';
import React, { useState } from 'react';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const {
        permissions,
        isLoading,
        user
    } = useKindeBrowserClient();

    const handleSend = (event) => {
        event.preventDefault();
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, user: user.given_name }]);
            setInput('');
        }
    };

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="overflow-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div key={index} className="p-2 rounded-lg bg-gray-300">
                        <div className="font-bold">{message.user}</div>
                        <div>{message.text}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSend} className="mt-auto mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 flex relative">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full px-2 pr-8 mb-20 sm:px-3 md:px-4 lg:px-5 xl:px-4 py-2 border border-black rounded-lg focus:outline-none focus:border-blue-500"
                />
            </form>
        </div>
    );
};

export default Chat;