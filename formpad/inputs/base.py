from pydantic import BaseModel, validator
from formpad.attributes import Attribute
import re

class Input(BaseModel):
    type: str
    id: str
    template_file: str
    attributes: Attribute

    @validator('id')
    def id_is_kebab_case(cls, v):
        if not re.match(r'^[a-z0-9]+(-[a-z0-9]+)*$', v):
            raise ValueError('id must be in kebab-case')
        return v