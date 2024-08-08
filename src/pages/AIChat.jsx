import FrameComponent22 from "../components/FrameComponent22";
import FrameComponent23 from "../components/FrameComponent23";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import "../global.css";
import React, { useState } from "react";
import axios from "axios";
const AIChat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const sendMessage = async () => {
    try{
      const options= {
        method: 'POST',
        body: {
          history: chat,
          message: message
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response = await axios.post("http://localhost:8000/api/chat/", options);
      // const data = await response.text
      console.log(response.data.reply)
      setChat([...chat, 
        { role: "user", parts: message }, 
        { role: "model", parts: response.data.reply }
      ]);
      setMessage("");
    }catch(error){
      console.error(error);  
    }
    
  };

  return (
    <>
    <Navbar1/>
      <section className="w-full flex flex-col justify-center  bg-gainsboro">

      
      <div className="w-full ml-auto mr-auto  overflow-hidden items-start justify-center h-full mb-96">
      <div className="w-11/12 max-w-4xl ml-auto mr-auto text-19xl text-center mt-10 text-gray-300">
      Enhancing Your Job Training with Personalized AI Assistance
      </div>
      <div className="w-11/12 max-w-4xl ml-auto mr-auto text-center mt-12 mb-12 text-gray-300">
      Your Personal AI Assistant for Tailored Career Guidance and Support
      </div>
                            

            <div className="w-11/12 max-w-4xl mb-6 mr-auto ml-auto rounded-md  bg-gray-300 text-white p-4 text-center">
                Ask AI Chat
            </div>
                  <div className="flex flex-col">
                  <div className='w-11/12 mr-auto ml-auto max-w-4xl bg-slate-300 rounded-md'>
                    <div className="p-5">
                      {chat.map((msg, index) => {
                          if (msg.role === 'user') {
                            return (
                              <div key={index} className="p-1 pl-2 pr-2 w-fit rounded-md bg-gray-300 text-white ml-auto mt-2">
                                {/* <strong>{msg.role}:</strong>  */}
                                {msg.parts}
                              </div>
                            );
                          } else if (msg.role === 'model') {
                            return (
                              <div key={index} className="p-1 pl-2 pr-2 w-full rounded-md bg-gray-600 text-white mr-auto mt-2">
                                {/* <strong>{msg.role}:</strong>  */}
                                <pre className="w-full">{msg.parts}</pre>
                              </div>
                            );
                          }
                          return null; 
                      })}
                    </div>
                    <div className="mt-auto self-stretch flex flex-row w-full pl-5 pr-5 pb-5">
                    <input className="pl-1 mt-2 w-full mr-1 rounded-md border-border-brand-default border-3" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className='p-1 pl-2 pr-2 w-fit rounded-md bg-gray-300 text-white mt-2'onClick={sendMessage}>Send</button>
                    
                    </div>
                    </div>

                  </div>    
          </div>
           

          </section>   
          <Footer/>
    </>
  );
};

export default AIChat;
