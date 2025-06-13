import { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call register API
    alert("Registered!");
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Username" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Password" required />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;