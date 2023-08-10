import { useState } from 'react'

import Header from './Components/Header'
import Form from './Components/Form'
import FormSubmitted from './Components/FormSubmitted'

function App() {

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  // const apiKey = import.meta.env.VITE_SUPABASE_API_KEY 
  // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL 
  // console.log(apiKey)
  // console.log(supabaseUrl)

  return (
    <>
      {
        isFormSubmitted 
        &&
        <FormSubmitted setIsFormSubmitted={setIsFormSubmitted} />
      }
      <div className='flex flex-col p-3 justify-center items-center h-full w-full'>    
        <Header />
        <Form setIsFormSubmitted={setIsFormSubmitted} />
      </div>
    </>
  )
}

export default App
