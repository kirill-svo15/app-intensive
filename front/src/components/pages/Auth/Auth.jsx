import {useForm, Controller, useFormState} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import styles from "./auth.module.scss"

import workoutBg from "../../../images/bg-auth.jpg"

import Layout from "../../common/Layout";
import LayoutOther from "../../common/LayoutOther";

import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import Alert from "../../ui/alert/Alert";

const Auth = () => {

    const {control, handleSubmit} = useForm({
        mode:'onChange'
    });
    const {errors} =useFormState({
        control
    })
    const onSubmit = data => console.log(data);


    return (
        <LayoutOther>
            <Layout bgImage={workoutBg} heading={'Auth || Register'} otherPage='other'/>
            <div className={styles.wrapper}>
                <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>


                    <Controller
                        control={control}
                        name='email'
                        rules={{
                            required: 'email is require',
                        }}
                        render={({
                            field:{value, onChange,ref}
                        }) => (
                            <>
                                <Field
                                    value={value || ''}
                                    onChange={onChange}
                                    placeholder={'Enter email'}
                                />
                               {errors?.email && <Alert>{errors?.email.message}</Alert>}
                            </>

                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: 'password is require',
                            minLength: {
                                value: 5,
                                message: `минимальная длина 5 символов`
                            }
                        }}
                        render={({
                            field:{value, onChange}
                        }) => (
                            <>
                                <Field
                                    value={value || ''}
                                    onChange={onChange}
                                    placeholder={'Enter password'}
                                />
                                {errors?.password && <Alert>{errors?.password.message}</Alert>}

                            </>

                        )}
                    />
                    <div className={styles.wrapperBtns}>
                        <Button type={'submit'} cl={'other'} className={styles.btn} >
                            Sign in
                        </Button>
                        <Button type={'submit'} cl={'other'} className={styles.btn} >
                            Sign up
                        </Button>
                    </div>
                </form>

            </div>
        </LayoutOther>


    );
};

export default Auth;