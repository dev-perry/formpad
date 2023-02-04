import os

dirname = os.path.dirname(__file__)
schemes = os.path.join(dirname, "schemes")

def read_file(filename: str):
    try:
        with open(f"{schemes}/{filename}", "r") as f:
            return f.read()
    except FileNotFoundError:
        raise Exception(f"File {filename} not found")