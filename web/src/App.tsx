export default function App() {
  return (
    <>
      <div className="flex flex-row mx-auto justify-between max-w-7xl">
        <div>
          logo here
        </div>
        <div>
          github logo here
        </div>
      </div>
      <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[44px]">
        <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 w-full h-[720px] space-x-0 md:space-x-6 lg:space-x-[76px]">
        <div className="bg-[#364E66] flex-grow rounded-lg">
          Editor goes here
        </div>
        <div className="border-[#B5BECC] flex-grow border-2 rounded-lg">
          Form view goes here
        </div>
        </div>
      </div>
      <div className="text-center mt-10 md:mt-[80px]">
        <a href="https://linkedin.com/in/pasibey" target="_blank" rel="noreferrer">
        <p className="text-[#C58556]">A concept by Perry Asibey-Bonsu</p>
        </a>
      </div>
    </>
  )
}
