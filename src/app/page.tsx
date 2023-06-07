import UseStateHook from '@/app/hooks/UseStateHook'
import Image from 'next/image'
import UseEffectHook from './hooks/UseEffectHook'
// import { UseStateHook } from '../hooks/useStateHook/page'

export default function Home() {
  return (
    <main>
    {/* < UseStateHook /> */}
    <UseStateHook />
    <UseEffectHook />
    </main>
  )
}
