from pydantic import BaseModel

class Attribute(BaseModel):
    label: str
    description: str | None