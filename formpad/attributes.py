from pydantic import BaseModel, validator
from typing_extensions import TypedDict
from formpad.utils import are_labels_present

class Attribute(BaseModel):
    label: str
    description: str | None

class TextAreaInputAttribute(Attribute):
    placeholder: str | None
    value: str | None

class DropdownInputAttribute(Attribute):
    options: list[dict]

    @validator('options')
    def options_must_be_label_value_pairs(cls, v):
        validate_result = are_labels_present(v, "Dropdown")
        return validate_result 

class CheckboxOption(TypedDict):
    label: str
    required: bool | None

class CheckboxInputAttribute(Attribute):
    options: list[CheckboxOption]

    @validator('options')
    def options_must_be_label_value_pairs(cls, v):
        validate_result = are_labels_present(v, "Checkbox")
        return validate_result 