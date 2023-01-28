from os import path
from formpad.form import Form

class TestForm:

    github = path.join(path.dirname(__file__), "schemes/github_issue_form.yaml")
    valid_one = path.join(path.dirname(__file__), "schemes/valid_one.yaml")

    def test_create_form(self):

        github_form = Form(self.github)
        valid_one_form = Form(self.valid_one)

        assert github_form.count == 3
        assert valid_one_form.count == 2