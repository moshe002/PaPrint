import Form from './Components/Form'
//VITE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z2xnbGRzbWNqZWRoY2l5Y2FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NDg5NTUsImV4cCI6MjAwNzEyNDk1NX0.Mm8vALp1wGPVc58lxnyCpA4sRZhN2QLHD4DBf2JL9Xo"

function App() {

  return (
    <div className='flex flex-col p-3 justify-center items-center h-full w-full'>
      <div className='p-3'>
        <h1 className='text-center text-3xl font-semibold'>PaPrint</h1>
        <p className='text-center'>
          PaPrint is a Web Application that helps
          you print your documents while not 
          being in the store physically. 
        </p>
      </div>
      <Form />
    </div>
  )
}

export default App
