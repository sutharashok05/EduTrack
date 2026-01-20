import { useState } from "react";

const Signup = () => {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setForm({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { role, ...form });
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <select onChange={handleRoleChange}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        {role === "student" && (
          <>
            <input
              type="text"
              name="enrollment"
              placeholder="Enrollment Number"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === "teacher" && (
          <>
            <input
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === "admin" && (
          <input
            type="password"
            name="adminKey"
            placeholder="Admin Secret Key"
            onChange={handleChange}
            required
          />
        )}

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  form: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

export default Signup;
