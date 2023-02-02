from formpad.attributes import DropdownInputAttribute
from .base import Input

class DropdownInput(Input):
    type = "dropdown"
    template_file = "dropdown.html"
    attributes: DropdownInputAttribute