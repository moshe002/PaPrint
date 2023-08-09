import { createClient } from '@supabase/supabase-js'
import { useForm, SubmitHandler } from "react-hook-form"

import SubmitButton from "./SubmitButton"

interface Inputs {
    file: FileList;
    name: string;
    number: number;
    email: string;
    purpose: string;
    message: string;
}

function Form() {

    const supabase = createClient(import.meta.env.VITE_URL, import.meta.env.VITE_API_KEY)

    const { register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm<Inputs>()

    const onsubmit: SubmitHandler<Inputs> = (data) => {
        //e.preventDefault()
        console.log(data) // data is an object
    }

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-3 items-center p-3">
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="file">File:</label>
                    <p className='text-gray-400 text-xs italic'>(word, pdf, images, text files, etc)</p>
                    <div className="flex p-5 items-center border-dashed w-auto h-20 border-4 border-gray-300 rounded-md bg-gray-100">
                        <input 
                            type="file" 
                            id="file" 
                            {...register("file", { required: true })}
                            aria-invalid={errors.file ? "true" : "false"} 
                        />
                    </div>
                    {errors.file?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">File is required</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="name">Fullname of Customer:</label>
                    <input 
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                        type="text" 
                        id="name" 
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"} 
                    />
                    {errors.name?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Name is required</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="number">Contact Number of Customer:</label>
                    <input
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none"  
                        type="number" 
                        id="number" 
                        {...register("number", { required: true, maxLength: 11 })}
                        aria-invalid={errors.number ? "true" : "false"} 
                    />
                    {errors.number?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Phone number is required</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="email">Email of Customer:</label>
                    <input
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                        type="email" 
                        id="email" 
                        {...register("email", { required: true })}
                        aria-invalid={errors.email ? "true" : "false"} 
                    />
                    {errors.email?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Email is required</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="purpose">Purpose of Printing:</label>
                    <input
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                        type="text" 
                        id="purpose" 
                        {...register("purpose", { required: true })} 
                        aria-invalid={errors.purpose ? "true" : "false"}
                    />
                    {errors.purpose?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Purpose is required</p>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="message">Additional Message:</label>
                    <textarea 
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none"
                        id="message" 
                        {...register("message", { required: true })} 
                        aria-invalid={errors.message ? "true" : "false"}
                        cols={23} rows={5}></textarea>
                    {errors.message?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Message is required</p>
                    )}
                </div>
                <SubmitButton />
            </form>
        </>
    )
  }
  
  export default Form