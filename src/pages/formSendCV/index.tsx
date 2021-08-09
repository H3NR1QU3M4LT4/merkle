import { useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import FileUploader from "../../components/FileUploader";

export interface IFormSendCV {
  fullName: string;
  email: string;
  about: string;
  file: string;
}

const FormSendCV = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState([""]);
  const getFileData = (fileData) => {
    setFile(fileData);
  };

  const onSubmit: SubmitHandler<IFormSendCV> = (data) => {
    console.log(data);
    data.file = file.toString();
  };

  console.log(watch("example"));

  return (
    <div>
      <div className="text-black text-4xl font-bold py-8 text-left m-5">
        Contact
      </div>
      <div className="max-w-screen-md rounded overflow-hidden shadow-lg bg-gray-100 py-3 m-5 mb-10">
        <div className="container flex flec-col justify-center sm:text-left lg:text-left px-7">
          <div className="item w-4/5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-5">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  full name
                </span>
                <input
                  {...register("fullName", { required: true })}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-5">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  email
                </span>
                <input
                  {...register("email", { required: true })}
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-5">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  sobre
                </span>
                <textarea
                  {...register("about", { required: true })}
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mt-5">
                <FileUploader fileData={getFileData} />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide mt-2 
              bg-black hover:bg-gray-500  border-gray-700
              text-white p-3 rounded-lg w-1/2 
              focus:outline-none focus:shadow-outline py-2 mb-7"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSendCV;
