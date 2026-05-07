// import { useForm } from "react-hook-form";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const role = data.email.includes("principal") ? "principal" : "teacher";
    
//     login({ email: data.email, role });

//     if (role === "principal") {
//       navigate("/principal/dashboard");
//     } else {
//       navigate("/teacher/dashboard");
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-lg rounded">
//         <input {...register("email")} placeholder="Email" className="border p-2 mb-2 w-full" />
//         <input {...register("password")} type="password" placeholder="Password" className="border p-2 mb-2 w-full" />
//         <button className="bg-blue-500 text-white px-4 py-2">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import { useForm } from "react-hook-form";
// import { loginUser } from "../../service/auth.service";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// const Login = () => {
//   const { register, handleSubmit } = useForm();
//   const { login } = useAuth();
//   const navigate = useNavigate();

// //   const onSubmit = async (data) => {
// //     try {
// //       const res = await loginUser(data);

// //       login(res);

// //       if (res.user.role === "PRINCIPAL") {
// //         navigate("/principal/dashboard");
// //       } else {
// //         navigate("/teacher/dashboard");
// //       }

// //     } catch (err) {
// //       alert(err?.response?.data?.message || "Login failed");
// //     }
// //   };
// const onSubmit = async (data) => {
//   try {
//     const res = await loginUser(data);

//     // token decode
//     const decoded = jwtDecode(res.token);

//     console.log("DECODED TOKEN:", decoded);

//     const userData = {
//       email: decoded.email,
//       role: decoded.role,
//       id: decoded.id,
//     };

//     login({
//       token: res.token,
//       user: userData,
//     });

//     if (decoded.role === "PRINCIPAL") {
//       navigate("/principal/dashboard");
//     } else {
//         console.warn(" I am in teacher dashboard");
//       navigate("/teacher/dashboard");
//     }

//   } catch (err) {
//     console.log(err);
//     alert("Login failed");
//   }
// };
//   return (
//     <div className="flex h-screen items-center justify-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow rounded space-y-3 w-80">
//         <h2 className="text-xl font-bold">Login</h2>

//         <input {...register("email", { required: true })} placeholder="Email" className="border p-2 w-full" />

//         <input {...register("password", { required: true })} type="password" placeholder="Password" className="border p-2 w-full" />

//         <button className="bg-green-500 text-white p-2 w-full">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { loginUser } from "../../service/auth.service";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      console.log("LOGIN RESPONSE:", res);

      // ✅ Check success
      if (res.success) {

        // ✅ Decode token
        const decoded = jwtDecode(res.token);

        console.log("DECODED TOKEN:", decoded);

        // ✅ User object
        const userData = {
          id: decoded.id,
          role: decoded.role,
        };

        // ✅ Save login
        login({
          token: res.token,
          user: userData,
        });

        // ✅ Navigate by role
        if (decoded.role === "PRINCIPAL") {
          navigate("/principal/dashboard");
        } else if (decoded.role === 'TEACHER') {
          navigate("/teacher/dashboard");
        }

      } else {
        alert("Login failed");
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;