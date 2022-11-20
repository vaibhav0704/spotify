'use client'

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Login() {
  const [providers, setProviders] = useState([])

  useEffect(async () => {
    console.log('I am ')
    let providersList = await getProviders()
    providersList = Object.values(providersList)
    console.log(providersList)
    setProviders(providersList)
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen w-full justify-center bg-gray-800">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {providers?.map(provider => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-4 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

