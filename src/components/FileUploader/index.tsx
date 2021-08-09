import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Papa from 'papaparse';

const FileUploader = ({ fileData }) => {
    let path;
    const hiddenFileInput = React.useRef(path);
    const [file, setFile] = useState('');
    const { register } = useForm();

    const onChange = (event) => {
        setFile(event.target.files[0].name);

        let fileDetails = event.target.files[0];
        let parseFile = Papa.parse(fileDetails, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                fileData(results.meta.fields);
            },
        });
    };

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    return (
      <>
        <div>
          <div>
            <button
              className={
                "bg-blue-merkle text-white uppercase text-sm font-bold tracking-wide mt-2 hover:bg-gray-500  border-gray-700 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              }
              onClick={(event) => handleClick(event)}
            >
              Upload cv
            </button>
          </div>
          <div>{file}</div>
          <input
            type="file"
            {...register("file", { required: true })}
            onChange={onChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
      </>
    );
};

export default FileUploader;
