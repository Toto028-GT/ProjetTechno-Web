'use client';
import { useRouter } from 'next/navigation';
import { Map } from 'lucide-react';
import React from 'react';

type Props = React.PropsWithChildren<{
    variante?: "clair" | "sombre"
    destination: string
    style: string
}>

export const Bouton = ({ variante, destination, children ,style}: Props ) => {
  const router = useRouter();
  
  return <button
    onClick={() => router.push(destination)}
    className={style}
    >
    {children}
  </button>
}