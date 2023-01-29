import { useState} from 'react';
import Editor, { Monaco} from '@monaco-editor/react';

export default function YAMLEditor() {

  const setTheme = (monaco: Monaco) => {

    monaco.editor.defineTheme('formpad-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#364E66',
        'editor.cursorBackground': '#C58556',
      }
    })

  }

const [code, setCode] = useState<string |  undefined>();

  return (
    <>
      <div className="relative bg-[#364E66] flex flex-col flex-grow rounded-lg drop-shadow-[4px_4px_8px_rgba(17,24,39,1)] md:w-1/2">
        {/* YAML tag */}
        <p className="absolute right-5 top-4 font-medium text-[#C58556] z-10">
          YAML
        </p>
        <div className="flex flex-grow rounded-t-lg overflow-hidden pt-10">
            <Editor 
            defaultLanguage="yaml" 
            defaultValue={code}
            theme="formpad-theme"
            beforeMount={setTheme}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 13,
              lineNumbers: "off",
              minimap: {
                enabled: false
              },
              scrollbar: {
                vertical: "hidden",
                horizontal: "hidden"
              },
              guides: {
                indentation: false,
              },
              wordWrap: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              renderLineHighlight: "none",
              overviewRulerLanes: 0,
            }}
            />
        </div>
        {/* Control bar */}
        <div className="w-full flex flex-row h-14 border-t-2 border-[#3D5670] justify-between items-center px-4">
          <button className="h-8 border bg-[#364E66] border-[#B5BECC] text-[#B5BECC] px-2 text-center rounded-lg font-medium text-sm">
            RESET
          </button>
          <button className="h-8 rounded-md px-3 text-[#0A3343] font-semibold bg-[#56C5AD]">
            Generate
          </button>
        </div>
      </div>
    </>
  );
}
