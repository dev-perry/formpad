from fastapi.testclient import TestClient
from service.main import app
from .utils import read_file

client = TestClient(app)

class TestAPI:

    def test_starter(self):
        response = client.get("/starter")

        assert response.status_code == 200
        assert response.headers["content-type"] == "text/plain; charset=utf-8"
        assert response.stream is not None
    
    def test_convert(self):
        scheme_content = read_file("valid_two.yaml")
        response = client.post("/convert", json={"scheme": scheme_content})

        assert response.status_code == 200
        assert response.headers["content-type"] == "text/html; charset=utf-8"
        assert response.content is not None