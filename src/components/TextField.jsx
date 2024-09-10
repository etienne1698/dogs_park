import { useState } from "react";

function TextField({label, placeholder, id, type, oeil, value, onChange}) {


  return (
    <div className="flex flex-col mb-3">
      <label htmlFor="name" className='mb-2 text-[18px]'>{label}</label>
        <div className='bg-grey text-[14px] flex justify-between border border-solid focus-within:border-black rounded-[12px] pl-5 py-3'>
      
      <input
        value={value}
        onChange={onChange}
        type={type || "text"}
        id={id}
        name="name"
        placeholder={placeholder}
        required
        minLength="4"
        maxLength="15"
        size=""
        className="bg-transparent outline-none"
      />
      <div className='pr-5'>{oeil}</div>
      </div>
      
      

    </div>
  );
}

export default TextField