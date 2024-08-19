function TextField({label, placeholder, id, type, oeil}) {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className='mb-2 text-[18px]'>{label}</label>
        <div className='bg-grey text-[14px] flex justify-between border border-solid focus-within:border-black rounded-[12px] pl-5 py-3'>
      <input
        type={type || "text"}
        id={id}
        name="name"
        placeholder={placeholder}
        required
        minLength="4"
        maxLength="8"
        size="10"
        className="bg-transparent outline-none"
      />
      <div className='pr-5'>{oeil}</div>
      </div>
      
      

    </div>
  );
}

export default TextField