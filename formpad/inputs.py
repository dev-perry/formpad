from pydantic import BaseModel
from formpad.attributes import *

class Input(BaseModel):
    type: str
    name: str
    template_file: str
    attributes: Attribute

class TextAreaInput(Input):
    type = "textarea"
    template_file = "textarea.html"
    attributes: TextAreaInputAttribute

class DropdownInput(Input):
    type = "dropdown"
    template_file = "dropdown.html"
    attributes: DropdownInputAttribute

class CheckboxInput(Input):
    type = "checkbox"
    template_file = "checkbox.html"
    attributes: CheckboxInputAttribute