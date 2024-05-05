'use client'
import Link from 'next/link'
import ConnectButton from './ConnectButton'
import { useConnect } from 'wagmi'
import { injected, metaMask } from 'wagmi/connectors'



const Navbar = () => {

  // const { connect } = useConnect()

  return (
    <nav className='flex mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 items-center justify-between'>
      <Link href="/">
        ApeSafariSwap
      </Link>
      <div>
        <ConnectButton />
      </div> 
    </nav>
  )
}

export default Navbar