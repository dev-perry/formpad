from .base import Attribute
from typing_extensions import TypedDict

class CheckboxOption(TypedDict):
    label: str
    required: bool | None

class CheckboxInputAttribute(Attribute):
    options: list[CheckboxOption]