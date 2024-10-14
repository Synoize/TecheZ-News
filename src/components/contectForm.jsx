import { useState } from "react"

export const ContectForm = () => {
    const [user, setUser] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
        })
    }
    return <form onSubmit={handleSubmitForm} className='w-full sm:w-3/6 flex flex-col items-start text-gray-800 bg-slate-200 p-4'>
        <label htmlFor="name">Name</label>
        <input onChange={handleInputChange} value={user.fullName} type="text" name="fullName" className='w-full p-2 mb-3 rounded outline-none text-gray-800' required />
        <label htmlFor="name">Mobile No.</label>
        <input onChange={handleInputChange} value={user.phoneNumber} type="number" name="phoneNumber" className='w-full p-2 mb-3 rounded outline-none text-gray-800' required />
        <label htmlFor="name">Email Id</label>
        <input onChange={handleInputChange} value={user.email} type="email" name="email" className='w-full p-2 mb-3 rounded outline-none text-gray-800' required />
        <textarea onChange={handleInputChange} value={user.message} name='message' placeholder='Write your message here . . .' className='w-full h-36 p-2 mt-4 text-sm rounded outline-none text-gray-800'></textarea>

        <button type="submit" className='clickEffect mt-4 px-4 p-2 text-sm bg-slate-600 text-white rounded'>Submit</button>
    </form>
}