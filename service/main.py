import random
import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse, StreamingResponse
from formpad.form import Form
from formpad.templater import Templater
from .models import EditorRequest

app = FastAPI(
    title="Formpad API",
    version="0.1.0",
)

dirname = os.path.dirname(__file__)
starter_schemes = os.path.join(dirname, "starters")

@app.get("/health")
def health():
    return "System is healthy."

@app.post("/convert", response_class=HTMLResponse)
def convert_YAML(editor_request: EditorRequest):
    try:
        form_data = Form(editor_request.scheme)
        html_form = Templater(form_data)
    except:
        raise HTTPException(status_code=500, detail="Unable to generate form.")
    
    return HTMLResponse(content=html_form.render_form(), status_code=200)


@app.get("/starter", response_class=StreamingResponse)
def send_starter_scheme():
    def random_file():
        files = os.listdir(starter_schemes)
        try:
            with open(f"{starter_schemes}/{random.choice(files)}", "rb") as stream:
                yield from stream
        except:
            raise HTTPException(status_code=500, detail="Unable to retrieve starter scheme.")

    return StreamingResponse(random_file(), media_type="text/plain")