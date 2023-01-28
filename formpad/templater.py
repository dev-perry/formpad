from formpad import env, html_form_template
from formpad.form import Form

class Templater:

    def __init__(self, form: Form):
        self.form = form
    
    def render_inputs(self):
        input_list = []
        for element in self.form.content:
            template = env.get_template(element.template_file)
            html_input = template.render(**element.attributes.dict())
            input_list.append(html_input)
        
        return input_list

    def render_form(self):
        form_inputs = self.render_inputs()
        html_form = html_form_template.render(form_inputs=form_inputs)
        
        return html_form