import {React, useState} from 'react';
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    permissions,
    isLoading,
    user
  } = useKindeBrowserClient();

  return (
    <div className="flex h-screen bg-gray-200">
      <div className='w-64 bg-white sticky shadow-lg'>
        <div className='h-20 border '>
        {user ? (
          <div className='flex flex-row items-center'>
            <img src={user.picture} alt="User" className="rounded-full m-4 h-8 w-8" />
            <div>
              <div className="font-bold">{user.given_name}</div>
              <div className="text-sm ">{user.email}</div>
            </div>
          </div>
        ) : (
          <RegisterLink className='bg-black text-white text-sm px-4 py-2 rounded-xl'>Sign up</RegisterLink>
        )}
        </div>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>
  <button className='mx-2 mr-2 mt-3 w-11/12 bg-transparent  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow'>
    Heyy
  </button>

      </div>
    </div>
  );
};

export default Sidebar;