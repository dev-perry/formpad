def are_labels_present(options: list[dict], field: str):
        for option in options:
            if "label" not in option.keys():
                raise ValueError(f"{field} options must have labels")
        return options
