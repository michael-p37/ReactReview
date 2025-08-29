import { useState } from "react";
import Input from "../Input";
import type { Credentials, LoginFormProps } from "../../Interface";
function LoginForm({onLogin}: LoginFormProps) {
  const [formData, setFormData] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    onLogin(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@mail.com"
          label="Email"
        />
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="******"
          label="Password"
        />
        <button type="submit">Login</button>
      </form>
  )
}

export default LoginForm;