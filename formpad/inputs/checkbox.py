from formpad.attributes import OptionsAttribute
from .base import Input

class CheckboxInput(Input):
    type = "checkbox"
    template_file = "checkbox.html"
    attributes: OptionsAttribute