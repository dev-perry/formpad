from pydantic import BaseModel
from formpad.attributes import Attribute

class Input(BaseModel):
    type: str
    name: str
    template_file: str
    attributes: Attribute