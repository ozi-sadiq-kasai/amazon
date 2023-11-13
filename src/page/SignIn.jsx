const SignIn = () => {
  return (
    <div className="mt-24 font-lato flex flex-col justify-center items-center">
      <h1 className=" text-xl uppercase mt-20 text-orange-400">SignIn</h1>
      <form action="#" className="flex flex-col tiny:w-1/2 gap-2 ">
        <input
          type="text"
          placeholder="Name"
          className="border py-1 border-slate-300"
        />
        <input
          type="text"
          placeholder="Surname"
          className="border py-1 border-slate-300"
        />
        <input
          type="Email"
          placeholder="Email"
          className="border py-1 border-slate-300"
        />
        <input
          type="Password"
          placeholder="PassWord"
          className="border py-1 border-slate-300"
        />
        <button className="bg-orange-300 text-slate-200 hover:text-orange-300 hover:bg-header py-1 w-1/3 m-auto">
          Submit
        </button>
      </form>
    </div>
  )
}
export default SignIn