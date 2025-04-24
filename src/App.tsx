import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [vis, setVis] = useState<boolean>(true)

  const sendMessage = (e: React.FormEvent<HTMLFormElement>, name: string, message: string, setMessage: unknown, ) => {
    console.log("Send Message Clicked.");
  }

  return (
    <>
      <div className="flex flex-row text-gray-100">
        <div className='w-full bg-slate-700 flex flex-col pb-5' >
          <div className='w-full min-h-screen flex flex-col justify-end gap-4 pb-20' id="chatbox">
            <div className="mx-8 break-all chat-message bg-slate-600 rounded-xl rounded-xl w-fit inline-block px-5 py-4">
              <p>Hi! Welcome to Rustcord. Enjoy your stay!</p>
            </div>
          </div>
          <form className='w-full h-10 fixed bottom-0 flex flex-row justify-center gap-4 mb-5 px-5' onSubmit={(e) => sendMessage(e, name, message, setMessage)}>
            <input name="message" id="messageBox" type="text" className='bg-slate-400 w-full py-2 px-5 focus:outline-0 rounded-tl-xl rounded-bl-xl' value={message}
              placeholder="Enter your message here..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} />
            <button id="messageBtn" className='bg-slate-400 px-2 active:translate-y-0.5 active:translate-x-0.5 hover:text-black transition-all rounded-tr-xl rounded-br-xl'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
