from .base import Attribute
from pydantic import validator
from formpad.utils import are_labels_present

class OptionsAttribute(Attribute):
    options: list[dict]

    @validator('options')
    def options_must_be_label_value_pairs(cls, v):
        validate_result = are_labels_present(v, "Dropdown")
        return validate_result 
