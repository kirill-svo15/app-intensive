import {useMutation} from "@tanstack/react-query";
import {useState} from "react";
import {useForm, Controller, useFormState} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {api} from "../../../api/axios";


import workoutBg from "../../../images/bg-auth.jpg"

import Layout from "../../common/Layout";

import LayoutOther from "../../common/LayoutOther";
import Field from "../../ui/field/Field";
import Button from "../../ui/button/Button";
import Alert from "../../ui/alert/Alert";

import styles from "./auth.module.scss"


const Auth = () => {
	
	
	const [type, setType] = useState('')
	
	const navigate = useNavigate()
	
	const {control, handleSubmit, getValues} = useForm({
		mode: 'onChange'
	});
	
	const {errors} = useFormState({
		control
	})
	
	const {email, password} = getValues()
	
	const {mutate: reg, error, data} = useMutation(['Reg'],
		() => api({
			url: '/users',
			type: 'POST',
			body: {email, password},auth: false
		}),{
		onSuccess(data){
			localStorage.setItem('token', data.token)
			console.log(data)
		}
		})
	
	const onSubmit = (data) => {
		type === 'auth' ? console.log('auth') : reg()
		console.log(data)
	}
	
	
	return (
		<LayoutOther>
			<Layout bgImage={workoutBg} heading={'Auth || Register'} otherPage='other'/>
			<div className={styles.wrapper}>
				<form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
					{error && <Alert>{error}</Alert>}
					<Controller
						control={control}
						name='email'
						rules={{
							required: 'email is require',
							pattern: {
								value: /.+@.+\..+/i,
								message: 'Введите корректный email'
							}
						}}
						render={({
							         field: {value, onChange, ref}
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
							         field: {value, onChange}
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
						<Button type={'submit'} cl={'other'} className={styles.btn} onClick={() => setType('auth')}>
							Sign in
						</Button>
						<Button type={'submit'} cl={'other'} className={styles.btn} onClick={() => setType('reg')}>
							Sign up
						</Button>
					</div>
				</form>
			
			</div>
		</LayoutOther>
	
	
	);
};

export default Auth;