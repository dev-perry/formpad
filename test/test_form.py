import pytest
from formpad.form import Form
from .utils import read_file

valid = ["valid_one.yaml", "valid_two.yaml"]
invalid = ["invalid_one.yaml", "invalid_two.yaml"]

def test_valid_schemes():
    for scheme in valid:
        scheme_content = read_file(scheme)
        form = Form(scheme_content)
        assert form.is_valid == True

@pytest.mark.xfail(raises=Exception)
def test_invalid_schemes():
    for scheme in invalid:
        scheme_content = read_file(scheme)
        form = Form(scheme_content)
        assert form.is_valid == False