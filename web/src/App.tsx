import YAMLEditor from "./components/YAMLEditor";

export default function App() {
  return (
    <>
      <div className="flex flex-row mx-auto justify-between max-w-7xl items-center">
        <div className="w-72">
          <img src="/logo.png" alt="Formpad logo" />
        </div>
        <div className="w-8">
          <a
            href="https://github.com/dev-perry/formpad"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-logo.png" alt="Github Logo" />
          </a>
        </div>
      </div>
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[44px]">
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 w-full h-[720px] space-x-0 md:space-x-6 lg:space-x-[76px]">
          <YAMLEditor />
          <div className="border-[#B5BECC] flex-grow border-2 rounded-lg md:w-1/2">
            Form view goes here
          </div>
        </div>
      </div>
      <div className="text-center mt-10 md:mt-[80px]">
        <a
          href="https://linkedin.com/in/pasibey"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-[#C58556] font-medium text-xs">
            A project by Perry Asibey-Bonsu
          </p>
        </a>
      </div>
    </>
  );
}
