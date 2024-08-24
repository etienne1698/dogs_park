function IconText({icon, txt, className}) {
  return (
    <div className="flex items-center gap-x-2">
       <img src={icon} className={className}/>{txt}
    </div>
  )
}

export default IconText