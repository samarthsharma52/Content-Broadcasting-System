import { useForm } from "react-hook-form";
import { useState } from "react";

const UploadContent = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [preview, setPreview] = useState(null);

  const file = watch("file");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Uploaded Successfully");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        alert("Invalid file type");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert("File too large");
        return;
      }

      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Upload Content</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow space-y-4">

        <input
          {...register("title", { required: "Title required" })}
          placeholder="Title"
          className="border p-2 w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input
          {...register("subject", { required: "Subject required" })}
          placeholder="Subject"
          className="border p-2 w-full"
        />

        <textarea
          {...register("description")}
          placeholder="Description"
          className="border p-2 w-full"
        />

        <input
          type="file"
          {...register("file", { required: "File required" })}
          onChange={handleFileChange}
        />

        {preview && <img src={preview} alt="preview" className="w-40" />}

        <input
          type="datetime-local"
          {...register("startTime", { required: true })}
          className="border p-2 w-full"
        />

        <input
          type="datetime-local"
          {...register("endTime", { required: true })}
          className="border p-2 w-full"
        />

        <input
          type="number"
          {...register("rotation")}
          placeholder="Rotation Duration"
          className="border p-2 w-full"
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadContent;