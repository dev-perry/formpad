from formpad.attributes import TextAreaInputAttribute
from .base import Input

class TextAreaInput(Input):
    type = "textarea"
    template_file = "textarea.html"
    attributes: TextAreaInputAttribute