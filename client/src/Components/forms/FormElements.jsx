import LoginForm from "./LoginForm";
import InputField from "./InputField";
import Textarea from "./Textarea";

export const FormElements = [
  {
    id: "text-input",
    label: "Text Input",
    type: "forms",
    component: InputField,
    defaultProps: {
      type: "text",
      placeholder: "Type here",
      className: "input",
    },
    preview: <input type="text" placeholder="Type here" className="input" />,
    isContainer: false,
    children: []
  },
  {
    id: "email-input",
    label: "Email Input",
    type: "forms",
    component: InputField,
    defaultProps: {
      type: "email",
      placeholder: "Type Email here",
      className: "input",
    },
    preview: <input type="email" placeholder="Type Email here" className="input" />,
    isContainer: false,
    children: []
  },
  {
    id: "password-input",
    label: "Password Input",
    type: "forms",
    component: InputField,
    defaultProps: {
      type: "password",
      placeholder: "Password",
      className: "input",
    },
    preview: <input type="password" placeholder="Password" className="input" />,
    isContainer: false,
    children: []
  },
  {
    id: "search-input",
    label: "Search Input",
    type: "forms",
    component: InputField,
    defaultProps: {
      type: "search",
      placeholder: "Search here",
      className: "input",
    },
    preview: <input type="search" required placeholder="Search here" className="input" />,
    isContainer: false,
    children: []
  },
  {
    id: "checkbox-input",
    label: "Checkbox Input",
    type: "forms",
    component: InputField,
    defaultProps: {
      type: "checkbox",
      placeholder: "",
      className: "checkbox",
    },
    preview: <input type="checkbox" placeholder="" className="checkbox" />,
    isContainer: false,
    children: []
  },
  {
    id: "textare",
    label: "Textarea",
    type: "forms",
    component: Textarea,
    defaultProps: {
      type: "",
      placeholder: "Bio",
      className: "textarea", 
    },
    preview: <textarea className="textarea" placeholder="Bio"></textarea>,
    isContainer: false,
    children: []
  },
  {
    id: "fieldset",
    label: "Login Form",
    type: "forms",
    component: LoginForm,
    defaultProps: {
      className:
        "fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4",
    },
    preview: (
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    ),
    isContainer: false,
    children: []
  },
];
