import Form from './Components/Form'

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
