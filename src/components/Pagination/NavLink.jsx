const NavLink = ({
  text,
  onNavLinkClick,
}) => {
  return (
    <span onClick={onNavLinkClick}> {text} ... </span>
  )
}

export default NavLink
