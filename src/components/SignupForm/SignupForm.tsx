// Signup-Form.jsx
import { useState } from "react";
import Input from "../Input";
import type { CreateUserProp, SignupFormProps } from "../../Interface";
function SignupForm({onSignup}: SignupFormProps) {
  const [formData, setFormData] = useState<CreateUserProp>({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    onSignup(formData);
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
        <Input
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          label="first_name"
          />
        <br />
        <Input
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          label="last_name"
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
  )
}

export default SignupForm;