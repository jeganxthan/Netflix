import { Footer1 } from "../constants";
import { Footer2 } from "../constants";
import { Footer3 } from "../constants";
import { Footer4 } from "../constants";

const Footer = () => {
  return (
    <div className='text-neutral-500 mt-20 ml-20'>
        <h1>
            Questions? Call {" "}
            <span className="underline">000-800-919-1743</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center ">
        <div className="underline mt-10 mr-20 ">
            {Footer1.map((link, index)=>(
                <ul className="mb-4">
                    <li key={index}>
                        <a href={link.href}>
                            {link.text}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
        <div className="underline mt-10 mr-20">
            {Footer2.map((link, index)=>(
                <ul className="mb-4">
                    <li key={index}>
                        <a href={link.href}>
                            {link.text}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
        <div className="underline mt-10 mr-20">
            {Footer3.map((link, index)=>(
                <ul className="mb-4">
                    <li key={index}>
                        <a href={link.href}>
                            {link.text}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
        <div className="underline mt-10">
            {Footer4.map((link, index)=>(
                <ul className="mb-4">
                    <li key={index}>
                        <a href={link.href}>
                            {link.text}
                        </a>
                    </li>
                </ul>
            ))}
        </div>
    </div>
    <button className='mx-3 border px-1 py-1 bg-black bg-opacity-50 border-neutral-500 lg:w-[90px]  lg:px-4'>English</button>
    <p className="mt-4">Netflix India</p>
</div>
  )
}

export default Footer