import yaml
from dataclasses import dataclass, field
from formpad.inputs import *

@dataclass
class Form:
    filepath: str = field(init=True)
    raw: dict = field(init=False)
    count: int = field(init=False)
    content: list[Input] = field(init=False)

    def get_input_type(self, type: str):
        return {
            "textarea": TextAreaInput,
            "dropdown": DropdownInput,
            "checkbox": CheckboxInput
        }[type]

    def build(self):
        input_list = []
        for element in self.raw:
            target_input = self.get_input_type(element["type"])
            form_input = target_input(**element)
            input_list.append(form_input)

        return input_list
    
    def parse_yaml_file(self, scheme: str):
        with open(scheme, "r") as stream:
            try:
                return yaml.safe_load(stream)
            except yaml.YAMLError:
                raise Exception("Invalid YAML file")
    
    def __post_init__(self):
        try:
            self.raw = self.parse_yaml_file(self.filepath)
            self.count = len(self.raw)
            self.content = self.build()
        except Exception as e:
            raise Exception(f"Error while building form: {e}")