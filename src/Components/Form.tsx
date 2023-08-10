import { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

import supabase  from '../supabaseConfig.tsx'

import SubmitButton from "./SubmitButton"

interface Inputs {
    file: FileList | null;
    filename: string;
    name: string;
    number: string;
    email: string;
    purpose: string;
    message: string;
}

interface Props {
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form:React.FC<Props> = ({ setIsFormSubmitted }) => {
    
    // const apiKey = import.meta.env.VITE_SUPABASE_API_KEY 
    // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL 
    // console.log(apiKey)
    // console.log(supabaseUrl)

    const { 
            register, 
            handleSubmit, 
            reset, 
            formState,
            formState: { errors, isSubmitSuccessful }
        } = useForm<Inputs>()

    let randomNum = Math.floor(Math.random() * 10) 
    let anotherRandomNum = Math.floor(Math.random() * 50)

    const uploadFile = async (file:any) => {
        const { data, error } = await supabase
        .storage
        .from("to_print")
        .upload(randomNum + "/" + anotherRandomNum + file.name, file)

        if(error) {
            console.error(error)
        }
        if(data) {
            console.log(data)
        }
    }
    
    const onsubmit: SubmitHandler<Inputs> = async (formData, e:any) => {
        e.preventDefault()
        //console.log(formData) // data is an object
        let file;
        if(formData.file != null){
            file = formData.file[0]
        }
        let filename = formData.filename
        let name = formData.name
        let number = formData.number
        let email = formData.email
        let message = formData.message
        let purpose = formData.purpose

        uploadFile(file)

        let { data, error } = await supabase
        .from("toPrint")
        .insert([{filename, name, number, email, message, purpose}])
    
        if(error) {
            console.error(error)
        }
        if(data) {
            console.log(data)  
        }
        setIsFormSubmitted(true)
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ 
                file: null,
                filename: "",
                name: "",
                number: "",
                email: "",
                purpose: "",
                message: ""
            })
        }
    }, [formState, reset])

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-3 items-center p-3">
                <div className="flex flex-col items-center">
                    <label className='font-mono' htmlFor="file">File:</label>
                    <p className='text-gray-400 text-xs italic'>(word, pdf, images, text files, etc.)</p>
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
                    <label className='font-mono' htmlFor="filename">Name of File:</label>
                    <input 
                        className="text-center bg-gray-100 p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                        type="text" 
                        id="filename" 
                        {...register("filename", { required: true })}
                        aria-invalid={errors.filename ? "true" : "false"} 
                    />
                    {errors.filename?.type === "required" && (
                        <p className='text-sm text-red-500 italic' role="alert">Filename is required</p>
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