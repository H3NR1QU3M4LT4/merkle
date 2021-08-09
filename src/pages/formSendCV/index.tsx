import { useState } from 'react';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import FileUploader from '../../components/FileUploader';

export interface ICreateDestinataryListForm {
    userId: string;
    nameList: string;
    phoneNumberDestinataries: string;
}

const FormSendCV = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));

    return (
        <div>
                <div >
                   campaigns.title')
                </div>

                <div >
                <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
                </div>
      </div>
    );
};

export default FormSendCV;
