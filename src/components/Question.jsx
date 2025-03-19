import { Plus, X, ChevronRight  } from "lucide-react";
import { questions } from "../constants";
import { useState } from "react";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDrop = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="mt-20 text-xl md:text-2xl font-bold md:ml-28 mb-4 ml-10">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col items-center w-full mt-4">
            {questions.map((question, index)=>(
               <div key={index} className="w-full max-w-[80%] md:max-w-[700px] lg:max-w-[1100px]">
                    <div className="text-2xl bg-[#2D2D2D] hover:bg-[#666565] h-[90px] w-[300px] md:w-[700px] lg:w-[1000px] lg:ml-4 flex items-center justify-between px-4 cursor-pointer mb-2"
                    onClick={()=>toggleDrop(index)}>
                        <h1>{question.label}</h1>
                        <button>{openIndex===index ? <X/> : <Plus/>}</button>
                    </div>
                    {openIndex === index &&(
                        <div className="bg-[#2D2D2D] p-4 w-[300px] md:w-[700px] lg:w-[1100px] text-xl">
                            {question.text}
                        </div>
                    )}
                </div>
            ))}
        </div>
        <div className="mt-20 flex flex-col justify-center items-center">
            <p>
                Ready to watch? Enter your emailto create or restart your membership. 
            </p>
            <div className="flex flex-row mt-4">
            <input type="text" className='w-[200px] h-[60px]  border border-neutral-400 mr-2 lg:w-[560px] lg:h-[70px] mb-4 lg:mb-0' placeholder='   Email address'/>
            <button className='w-[100px] h-[60px] flex bg-[rgb(229,9,20)] px-7 py-[17px] rounded-lg lg:text-2xl text-sm lg:h-[70px] lg:w-[300px] lg:justify-center items-center'>Get Started <ChevronRight /></button>
            </div>
        </div>
    </div>
  );
};

export default Question;
