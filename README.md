![alt Formpad Logo](web/public/logo.png)

### **Summary**
Formpad is an original portfolio project by [Perry Asibey-Bonsu](https://www.linkedin.com/in/pasibey/). Inspired by [Github's Form Schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema), it is a tool that generates an HTML form from a YAML scheme. Formpad was built with:

- [Python](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Monaco](https://www.npmjs.com/package/@monaco-editor/react)

### **Skills** 
The product development skills implemented in the assembly of this project include:

1. **UI Design**: I designed the user interface with Figma. I thought through theming and component layout. The original design file is available for viewing [here](https://www.figma.com/file/fI7i2WiV68vs6eQgYcqY4x/Formpad-Design?node-id=1%3A2&t=KS7zkkPTXIpFiu2U-1).

2. **Frontend Development**: I built the UI components in React and styled them with TailwindCSS. Integrating the Monaco editor was an interesting challenge. The editor is endlessly configurable, so it took some deep dives into the documentation and trial-and-error to yield the desired behavior.

3. **Backend Development**: I put together a simple API using the FastAPI framework to handle the conversion of YAML to HTML. The choice was made purely to practice creating, managing, and deploying separate web services from a monorepo. It took a couple tries to get the Render deployment file right (apologies for the cluttered commit log 😬).

### **Data Model**
The important models in this project are server-side: Attributes, Inputs, and Forms. These models are meant to validate the output of the PyYAML library, which generates an array of Python dictionaries from a given YAML scheme.

Attributes describe how valid form inputs can be configured. The model for an Attribute is:

```python
    label: str
    description: str | None
    # only for textarea
    placeholder: str | None
    value: str | None
    # for dropdown and checkbox
    options: list[dict] # must be key-value pairs with "label" as key
```

Inputs describe which form inputs can be described in a YAML scheme. The model for an Input is:
```python
    type: str
    id: str #must be in kebab-case
    template_file: str #filename for HTML template
    attributes: Attribute
```

> Formpad currently supports the following input types: `textarea`, `dropdown`,` checkbox`.

Forms describe the inputs that compose a single form. The model for a Form is:
```python
    yaml_string: str #Required on initialization
    raw: dict
    count: int
    content: list[Input]
    is_valid: bool
```

### **How To Use The App**
The easiest way to use the app is to view it [online](https://formpad-editor.onrender.com).

The other away to use the app would be to deploy it on Render:

1. Clone the repository with the command
```
git clone https://github.com/dev-perry/formpad.git 
```
2. [Create a Render account](https://render.com/).

3. Follow [these instructions](https://render.com/docs/infrastructure-as-code) to deploy Formpad based on the configurations in the `render.yaml` file

4. Configure both the `REACT_APP_API_URL` and `PRODUCTION_URL` with the urls for the web editor and conversion API respectively.

### **Points for Improvement**
Since this is a portfolio project, I see a lot of opportunities for improvement. If I were to continue working on it I would:

- **NOT USE YAML**. Lmao. JSON is a much better way to describe and store information about an HTML form. I knew this going in, but wanted to play around with YAML anyway.
- Squash commits before merging branches to main to avoid cluttering the commit log.
- Add support for other inputs, like date and radio buttons
- Use better directory organization to simplify start and build commands

### **About Me**
I am a tinkerer. I like to figure out how things work and smash together apples and oranges to make weird juice. You can see some of my other concepts [here](https://portfolio.perryasibeybonsu.com/).