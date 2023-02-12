from formpad.attributes import OptionsAttribute
from .base import Input

class DropdownInput(Input):
    type = "dropdown"
    template_file = "dropdown.html"
    attributes: OptionsAttribute