from pydantic import BaseModel

class EditorRequest(BaseModel):
    scheme: str