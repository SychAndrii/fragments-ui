import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "All Fragments",
      href: "/fragments",
    },
    {
      text: "Particular fragment",
      href: "/fragment",
    },
    {
      text: "Add fragment",
      href: "/fragment/add",
    },
  ];

  return (
    <div id="nav" className=" h-full bg-main p-4 flex flex-col text-right">
      {links.map((link) => (
        <div>
          <NavLink
            className={({ isActive }) => {
              return `text-highlight text-xl hover:text-highlightDarken ${
                isActive ? "font-bold" : ""
              }`;
            }}
            to={link.href}
          >
            {link.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
