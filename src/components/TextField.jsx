import React from 'react'

function TextField({label, placeholder}) {
  return (
    <div className="flex flex-col">
      <label for="name">{label}</label>

      <input
        type="text"
        id="name"
        name="name"
        placeholder={placeholder}
        required
        minlength="4"
        maxlength="8"
        size="10"
        className="bg-grey"
      />
    </div>
  );
}

export default TextField