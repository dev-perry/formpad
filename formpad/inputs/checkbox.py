from formpad.attributes import CheckboxInputAttribute
from .base import Input

class CheckboxInput(Input):
    type = "checkbox"
    template_file = "checkbox.html"
    attributes: CheckboxInputAttribute