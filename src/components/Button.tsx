'use client'

import { useEffect, useRef } from "react";
import { Connector, useConnect } from 'wagmi'
import { useAccount, useDisconnect } from "wagmi";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
}

export const Button = ({ type, title, icon, variant }: ButtonProps) => {
  const { isConnecting, address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const isMounted = useRef(false);
  
  useEffect(() => {
    isMounted.current = true;
  }, []);

  

  return (
    <button className={`flex items-center justify-center px-3 gap-3 rounded-full border ${variant}`}
        type = { type }
    >
        { icon }
        <label className="whitespace-nowrap">{ title }</label>

    </button>
  )
}

export default Button