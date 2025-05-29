const LoginForm = ({ className }) => {
  return (
    <fieldset className={className}>
      <legend className="fieldset-legend">Login</legend>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Login</button>
    </fieldset>
  );
};

export default LoginForm;
