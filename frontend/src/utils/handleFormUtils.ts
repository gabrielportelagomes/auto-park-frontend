export function handleForm<T>(
  event: React.ChangeEvent<HTMLInputElement>,
  form: T,
  setForm: React.Dispatch<React.SetStateAction<T>>
): void {
  const { name, value } = event.target;
  setForm({ ...form, [name]: value });
}
