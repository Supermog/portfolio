import logo from "@/assets/logo.svg";

function Header() {
  return (
    <div className="flex items-center text-white p-5 sm:justify-between justify-center z-50">
      <a href="#" className="gap-5">
        <img src={logo} alt="Logo" className="w-20 h-14" />
      </a>
      <div className="gap-5 sm:flex hidden">
        <a href="#" className="link group">
          Home
          <div className="link-bottom-border" />
        </a>
        <a href="#about" className="link group">
          About
          <div className="link-bottom-border" />
        </a>
        <a href="#projects" className="link group">
          Projects
          <div className="link-bottom-border" />
        </a>
        <a href="#contact" className="link group">
          Contact
          <div className="link-bottom-border" />
        </a>
      </div>
    </div>
  );
}

export { Header };
