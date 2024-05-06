'use client'
import { useEffect, useState } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { wagmiContractConfig } from '../lib/contracts'
import { formatUnits } from "viem";

function Balance() {

    const account = useAccount()
    const address = account.address ?? '0x0'
    var addresses = new Array(1)
    addresses.push(address as `0x${string}`)

    const { data: balance } = useReadContract({
        ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: [address],
        // args: ['0xc95948BFc02027908d52E5fACC96E7B224dB58Fa'],
    })
    let amount: bigint = balance ?? BigInt(0)
    return (
        <div>
            {Number(formatUnits(amount, 18)).toFixed(0)} ApeSafari_v1            
        </div>        
    )
}

export default Balance