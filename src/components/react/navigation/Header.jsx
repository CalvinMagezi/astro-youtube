import React from "react";
import { FaSearch, FaYoutube } from "react-icons/fa/index.js";
import { useForm } from "react-hook-form";

function Header() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`/?title=${data.title}`);
  };

  return (
    <div className="flex items-center justify-between w-full p-2">
      <a href="/">
        <FaYoutube className="text-red-600 text-5xl" />
      </a>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl py-2 px-4 flex items-center bg-white relative"
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Search Something"
          className="w-64 text-black"
        />
        <input type="submit" className="absolute hidden" />
        <FaSearch className="text-red-600" />
      </form>
    </div>
  );
}

export default Header;
