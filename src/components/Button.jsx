
export default function Button({txt, variant="base", className}) {

  let classBtn = ""

  if (variant == "base"){
    classBtn = "bg-primary text-white hover:bg-secondary hover:text-primary"
  } else if (variant == "tertiary") {
    classBtn = "bg-white text-primary border border-solid border-primary focus:bg-primary focus:text-white"
  }

  
  return (
    <button className= {classBtn + ' px-12 py-4 text-button rounded-full ' + className}>{txt}</button>
  )
}
