from formpad.form import Form
from formpad.templater import Templater
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/convert", response_class=HTMLResponse)
def convert():
    try:
        form_data = Form("test/schemes/github_issue_form.yaml")
        html_form = Templater(form_data)
        return html_form.render_form()
    except Exception as e:
        return {"error": e}