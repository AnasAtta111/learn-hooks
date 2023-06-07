'use client'

import { useState } from "react";

const UseStateHook = () => {
const [state, setState]  = useState(0)
const [form, setForm] = useState({
  name:"",
  email:"",
  password:"",

})





  return (
    <section className="border-blue-800 border-8  rounded-xl bg-black/30 w-10/12 gap-8 max-h-80 p-4 mx-auto mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center gap-6">
        <div className="flex gap-x-7">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="rounded-lg outline-none  focus-within:outline-none"
            value={form.name}
            onChange={(e) => setForm((prev)=> ({...prev, name: e.target.value}))}
            // Good Pratice
          />
        </div>
        <div className="flex gap-x-9">
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            id="email"
            name="name"
            placeholder="Your Email"
            className="rounded-lg  outline-none focus-within:outline-none"
            onChange={(e)=> setForm({...form, email: e.target.value})}  
            // that's bad Practice
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="name"
            placeholder="Your Password"
            className="rounded-lg  outline-none focus-within:outline-none"
            onChange={(e)=>setForm((prev)=> ({...prev, password: e.target.value}))}
          />
        </div>
      </div>

      <div className=" flex flex-col text-center mt-4 lg:justify-end">
        <h1 className=" text-[74px] font-bold">{state}</h1>
        <div className="flex gap-x-4 justify-center lg:justify-center">
          {" "}
          {/* it's consider bad Practice if you setTime then see  */}
          {/* <button
            onClick={() => setState(state + 1)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Increament{" "}
          </button>
          <button
            onClick={() => setState(state - 1)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Decreament{" "}
          </button>
          <button
            onClick={() => setState(state * 0)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Reset{" "}
          </button> */}
          {/* using SettimeOut  5 seconds for Increament but if we click on decreament in 2 sec this will deceramnet but after 5 sec will upgrade the previous values. decearment will not work  */}
          {/* <button
            onClick={() =>{ 
              
              setTimeout(() => {
                setState(state + 1)

              }, 5000)
              
            
            
            }}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Increament{" "}
          </button>
          <button
            onClick={() => setState(state - 1)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Decreament{" "}
          </button>
          <button
            onClick={() => setState(state * 0)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Reset{" "}
          </button> */}




          {/* it's Consider the good Practice  */}
          <button
            onClick={() => {
              setTimeout(() => {
                setState((prev) => prev + 1);
              }, 2000);
            }}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Increament{" "}
          </button>
          <button
            onClick={() => setState((prev) => prev - 1)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Decreament{" "}
          </button>
          <button
            onClick={() => setState(state * 0)}
            className="bg-green-800 text-white  p-2 rounded-lg "
          >
            Reset{" "}
          </button>
          <h1>{form.name}</h1>
        </div>
      </div>
    </section>
  );
}

export default UseStateHook