'use client'
import Link from 'next/link'
import Button from './Button'
import { useConnect } from 'wagmi'
import { injected, metaMask } from 'wagmi/connectors'



const Navbar = () => {

  const { connect } = useConnect()

  return (
    <nav className='flex mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 items-center justify-between'>
      <Link href="/">
        ApeSafariSwap
      </Link>
      <div>
        <button onClick={() => connect({ connector: injected() })}>
      Connect
    </button>
        {/* <Button
          type = "button"
          title = "Connect"
          icon = ""
          variant = "border-orange-500"
        /> */}
      </div> 
    </nav>
  )
}

export default Navbar