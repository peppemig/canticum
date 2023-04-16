const SideNavItem = ({icon, text}) => {
    return (
        <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
        {icon}
        <div>{text}</div>
      </div>
    )
}

export default SideNavItem