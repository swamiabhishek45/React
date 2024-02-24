import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center py-10 w-full bg-black">
      <div
        className={`mx-auto w-full max-w-lg bg-zinc-900 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-white">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-white/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary text-purple-400 transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5 text-white/60">
            <Input
              label="Full Name "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
              className="text-black outline-purple-400"
            />
            <Input
              label="Email "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
              className="text-black outline-purple-400"
            />
            <Input
              label="Password "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
              className="text-black outline-purple-400"
            />
            <Button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-purple-400 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-purple-500"
            >
              Create Account <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
