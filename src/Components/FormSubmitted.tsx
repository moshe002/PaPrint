
interface Prop {
    setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormSubmitted:React.FC<Prop> = ({ setIsFormSubmitted }) => {
  return (
    <div className='fixed top-0 left-0 p-5 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-40 z-50'>
        <div className="flex flex-col items-center bg-green-200 p-5 rounded-md">
            <h1 className="text-green-500 text-center text-2xl font-bold">
                Form submitted, please check your email and a text message from time to time
            </h1>
            <br />
            <button 
                className="bg-black text-white p-3 font-semibold text-xl rounded-md opacity-70 duration-150 hover:opacity-100"
                type="button" 
                onClick={() => setIsFormSubmitted(false)}>
                    CLOSE
            </button>
        </div>
    </div>
  )
}

export default FormSubmitted