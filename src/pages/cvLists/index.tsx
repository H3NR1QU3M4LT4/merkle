import { useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import FileUploader from "../../components/FileUploader";

export interface IFormSendCV {
  fullName: string;
  email: string;
  about: string;
  file: string;
}

const CvList = () => {
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
        lista
      </div>
      <div className="max-w-screen-md rounded overflow-hidden shadow-lg bg-gray-100 py-3 m-5 mb-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intro to CSS</td>
              <td>Adam</td>
              <td>858</td>
            </tr>
            <tr className="bg-emerald-200">
              <td>
                A Long and Winding Tour of the History of UI Frameworks and
                Tools and the Impact on Design
              </td>
              <td>Adam</td>
              <td>112</td>
            </tr>
            <tr>
              <td>Intro to JavaScript</td>
              <td>Chris</td>
              <td>1,280</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CvList;
