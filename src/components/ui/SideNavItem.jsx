const SideNavItem = ({icon, text, onClick}) => {
    return (
        <div onClick={onClick} className="flex gap-2 items-center cursor-pointer hover:text-white transition">
        {icon}
        <div>{text}</div>
      </div>
    )
}

export default SideNavItem