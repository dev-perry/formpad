import YAMLEditor from './components/YAMLEditor';
import FormViewer from './components/FormViewer';
import { EditorProvider } from './contexts/EditorContext';
import { DisplayProvider } from './contexts/DisplayContext';
import { RequestProvider } from './contexts/RequestContext';

export default function App() {
  return (
    <RequestProvider>
      <div className="flex flex-row mx-auto justify-between max-w-7xl items-center px-6">
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
        <div className="flex flex-col  md:flex-row space-y-4 md:space-y-0 w-full space-x-0 md:space-x-6 lg:space-x-[76px]">
          <DisplayProvider>
            <EditorProvider>
              <YAMLEditor />
            </EditorProvider>
            <FormViewer />
          </DisplayProvider>
        </div>
      </div>
      <div className="mx-auto text-center mt-10">
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
    </RequestProvider>
  );
}
