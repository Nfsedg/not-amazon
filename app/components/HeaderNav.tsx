import LogoIcon from "../assets/logo_transparent.png";
import SearchTab from "./SearchTab";

export default function HeaderNav() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex items-center justify-center mx-auto p-2 gap-4">
          <a href="/" className="flex items-center">
            <img src={LogoIcon.src} alt="Image logo" className="h-12" />
          </a>
          <div className="w-full max-w-md">
            <SearchTab />
          </div>
        </div>
      </nav>
    </div>
  );
}
