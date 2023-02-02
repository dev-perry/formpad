from .base import Attribute

class TextAreaInputAttribute(Attribute):
    placeholder: str | None
    value: str | None