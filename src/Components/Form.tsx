import SubmitButton from "./SubmitButton"

function Form() {
    return (
      <>
          <form action="" className="flex flex-col gap-3 items-center p-3">
              <div className="flex flex-col">
                  <label htmlFor="file">File:</label>
                  <input type="file" id="file" name="file" required />
              </div>
              <div className="flex flex-col">
                  <label htmlFor="name">Fullname of Customer:</label>
                  <input 
                      className="text-center p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                      type="text" 
                      id="name" 
                      name="name" 
                      required />
              </div>
              <div className="flex flex-col">
                  <label htmlFor="number">Contact Number of Customer:</label>
                  <input
                      className="text-center p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none"  
                      type="number" 
                      id="number" 
                      name="number" 
                      required />
              </div>
              <div className="flex flex-col">
                  <label htmlFor="email">Email of Customer:</label>
                  <input
                      className="text-center p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                      type="email" 
                      id="email" 
                      name="email" 
                      required />
              </div>
              <div className="flex flex-col">
                  <label htmlFor="purpose">Purpose of Print:</label>
                  <input
                      className="text-center p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none" 
                      type="text" 
                      id="purpose" 
                      name="purpose" 
                      required />
              </div>
              <div className="flex flex-col">
                  <label htmlFor="message">Additional Message:</label>
                  <textarea 
                      className="text-center p-1 rounded-md border-2 border-gray-200 focus:border-gray-400 duration-150 outline-none"
                      name="message" 
                      id="message" 
                      cols={20} rows={5}></textarea>
              </div>
              <SubmitButton />
          </form>
      </>
    )
  }
  
  export default Form