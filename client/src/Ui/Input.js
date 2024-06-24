import React from 'react'

const Input = (props) => {
  return (
    // <input type={props.type || "text"} placeholder={props.text} className={`py-4 border-none rounded-lg placeholder:text-[#9D9D9D] placeholder:text-lg text-slate-500  ${props.styles} ${props.bg? 'bg-[#377DFF0D]':'bg-[#F5F5F5]'}`}/>
    // <input placeholder={props.text} name={props.name} onChange={props.onChange} type={props.type}  className='w-full p-3 rounded-md border-2  placeholder:text-slate-500'/>
  
    // <div class=" relative ">
    // <label for="required-email" class=" text-[14px] font-medium text-secondaryblack">
    //     {props.name}
    //     <span class="text-red-500 required-dot">
    //         *
    //     </span>
    // </label>
    // <input type={props.type} id="required-email" class="mt-1 rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name={props.name} placeholder={props.text}/>
    // </div>

      <div className="flex flex-col">
      <label className="mb-2 text-[14px] font-medium text-secondaryblack">
        {props.text}
      </label>
      <input
        className={`appearance-none border border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${props.styles}`}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.text}
      />
    </div>
  )
}

export default Input