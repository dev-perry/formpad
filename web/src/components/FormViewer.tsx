import { useEffect, useContext, useState } from 'react';
import { DisplayContext } from '../contexts/DisplayContext';
import { sanitize } from 'dompurify';


export default function FormViewer() {
  const displayState = useContext(DisplayContext);
  const [ formContent, setFormContent ] = useState({__html: ''});

  useEffect(() => {
    const htmlString = sanitize(displayState.formContent);
    setFormContent({__html: htmlString});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayState.formContent]);

  return (
    <div id='display-area' className="border-[#B5BECC] flex-grow border-2 rounded-lg h-[720px] md:w-1/2 px-9 pt-8" dangerouslySetInnerHTML={formContent}/>
  );
}
