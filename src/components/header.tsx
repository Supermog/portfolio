import logo from "@/assets/logo.png";

function Header() {
  return (
    <div className="flex items-center text-white p-5 sm:justify-between justify-center">
      <img src={logo} className="w-20 h-14" />
      <div className="gap-5 sm:flex hidden">
        <a href="#" className="link group">
          My Services
          <div className="link-bottom-border" />
        </a>
        <a href="#" className="link group">
          My Work
          <div className="link-bottom-border" />
        </a>
        <a href="#" className="link group">
          Contact Me
          <div className="link-bottom-border" />
        </a>
      </div>
    </div>
  );
}

export { Header };
