import { useState } from 'react'

import Header from './Components/Header'
import Form from './Components/Form'
import FormSubmitted from './Components/FormSubmitted'

function App() {

  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const supabaseKey = import.meta.env.VITE_REACT_APP_ANON_KEY;
  const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;

  return (
    <>
      {
        isFormSubmitted 
        &&
        <FormSubmitted setIsFormSubmitted={setIsFormSubmitted} />
      }
      <div className='flex flex-col p-3 justify-center items-center h-full w-full'>    
        <Header />
        <Form 
          supabaseKey={supabaseKey}
          supabaseUrl={supabaseUrl}
          setIsFormSubmitted={setIsFormSubmitted} />
      </div>
    </>
  )
}

export default App
