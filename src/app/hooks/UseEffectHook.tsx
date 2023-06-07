"use client"

import { useEffect, useState } from "react"

const UseEffectHook = () => {
const [state, setState] = useState<any>()



// bad Pratice
//   useEffect(()=> {
//     const interval = setInterval(()=> {
//         setState(state + 1)
//     }, 1000)

//   }, [state])


// useEffect(()=> {
//     const interval = setInterval(()=> {
//         console.log("Effect runed");
        
//         setState(prev => prev + 1)
//         }, 1000)

//         return ()=> {
//             clearInterval(interval)

//         }
// }, [])

useEffect(()=> {
    let iscancelled = false 
    const controller = new  AbortController();
    const signal = controller.signal

   
    const getData = async () => {
        const req = await fetch(`https://jsonplaceholder.typicode.com/users`, {signal});
        const res = await req.json();
        setState(res)
    }

    (()=>getData())()


    return () => { 
        // for cancelling anytime Api call
        controller.abort();
        iscancelled = true
    }
}, [])

console.log(state);

  return (
    <section className="bg-gray-600 w-10/12  mx-auto mt-6 text-white/95 text-center">
        <div className="text-3xl">
            <ul>
        {state?.map((item:any )=> (
            <li key={item.id}>{item.name} - {item.email}</li> 
        ))}

            </ul>
        </div>
    </section>
  )
}

export default UseEffectHook