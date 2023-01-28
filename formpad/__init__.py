from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("formpad/templates"), trim_blocks=True, lstrip_blocks=True)

html_form_template = env.get_template("form.html")