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

        let fileS = event.target.files[0];
        let parseFile = Papa.parse(fileS, {
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
            <div >
                <div>
                    <button    
                        onClick={(event) => handleClick(event)}       
                    >
                        createCampaign.upload
                    </button>
                </div>
                <div>
                   {file}
                   </div>
                <input
                    type="file"
                    {...register('phoneNumberDestinataries')}
                    onChange={onChange}
                    ref={hiddenFileInput}
                    style={{ display: 'none' }}
                />
            </div>
        </>
    );
};

export default FileUploader;
