export function handleForm<T>(
  event: React.ChangeEvent<HTMLInputElement>,
  _form: T,
  setForm: React.Dispatch<React.SetStateAction<T>>
): void {
  const { name, value, type, checked } = event.target;

  if (type === "radio") {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: checked ? value : undefined,
    }));
  } else {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
}
