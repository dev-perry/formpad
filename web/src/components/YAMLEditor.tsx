import { useState, useEffect, useContext } from 'react';
import Editor, { Monaco} from '@monaco-editor/react';
import { EditorDispatchContext, EditorContext } from '../contexts/EditorContext';
import { RequestDispatchContext } from '../contexts/RequestContext';
import { DisplayDispatchContext } from '../contexts/DisplayContext';

export default function YAMLEditor() {

  const [code, setCode] = useState<string>();
  const editorDispatch = useContext(EditorDispatchContext);
  const editorState = useContext(EditorContext);
  const requestDispatch = useContext(RequestDispatchContext);
  const displayDispatch = useContext(DisplayDispatchContext);


  const fetchForm = async () => {
      requestDispatch!({ type: 'SET_HAS_ERROR', payload: false })
      displayDispatch!({ type: 'SET_FORM_CONTENT', payload: '' })
      requestDispatch!({ type: 'SET_FETCHING_HTML', payload: true })

      try {
        const res = await fetch(process.env.REACT_APP_API_URL + '/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            scheme: editorState.content
          })
        })
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const html = await res.text()
        displayDispatch!({ type: 'SET_FORM_CONTENT', payload: html })
      } catch (err) {
        requestDispatch!({ type: 'SET_HAS_ERROR', payload: true })
        requestDispatch!({ type: 'SET_FETCHING_HTML', payload: false }) 
      }
  }

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

  useEffect(() => {
    const fetchStarter = async () => {
      try {
        requestDispatch!({ type: 'SET_HAS_ERROR', payload: false })
        requestDispatch!({ type: 'SET_FETCHING_STARTER', payload: true })
        const res = await fetch(process.env.REACT_APP_API_URL + '/starter')
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const starter = await res.text()
        editorDispatch!({ type: 'SET_CONTENT', payload: starter })
      } catch (err) {
        requestDispatch!({ type: 'SET_HAS_ERROR', payload: true })
        requestDispatch!({ type: 'SET_FETCHING_STARTER', payload: false })
      }

    }
    fetchStarter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setCode(editorState.content)
  }, [editorState.content])

  return (
      <div className="relative bg-[#364E66] flex flex-col flex-grow h-[720px] rounded-lg drop-shadow-[4px_4px_8px_rgba(17,24,39,1)] md:w-1/2">
        {/* YAML tag */}
        <p className="absolute right-5 top-4 font-medium text-[#C58556] z-10">
          YAML
        </p>
        <div className="flex flex-grow rounded-t-lg overflow-hidden pt-10">
            <Editor 
            defaultLanguage="yaml" 
            value={code}
            theme="formpad-theme"
            beforeMount={setTheme}
            onChange={(value) => editorDispatch!({ type: 'SET_CONTENT', payload: value! })}
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
                indentation: true,
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
          <button onClick={(() =>  editorDispatch!({ type: 'SET_CONTENT', payload: "" }))} className="h-8 border bg-[#364E66] border-[#B5BECC] text-[#B5BECC] px-2 text-center rounded-lg font-medium text-sm">
            RESET
          </button>
          <button onClick={() => fetchForm()} disabled={!editorState.content} className="h-8 rounded-md px-3 text-[#0A3343] font-semibold bg-[#56C5AD]" >
            Generate
          </button>
        </div>
      </div>
  );
}
