'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import RCG from 'react-captcha-generator';

export default function ContactForm() {


    const { register, handleSubmit, reset, getValues, formState: { errors }} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
      });

	const [captchaInput, setCaptchaInput] = useState('');
	const [captcha, setCaptcha] = useState('');
	const [captchaValid, setCaptchaValid] = useState(false)
	
	const captchaResult = (text) => {

		setCaptcha(text)

	}
	
	const captchaInputChanged = (event) => {
		const text = event.target.value
		setCaptchaInput(text)
		const captchaIsValid = text === captcha
		console.log('captcha valid ' + captchaIsValid)
		setCaptchaValid(captchaIsValid)
	}

    const onSubmit = (data) => {
        console.log('errors ' + errors.email)
		console.log(data);
        reset()
		setCaptcha('')
		setCaptchaInput('')
		setCaptchaValid(false)
		
	};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
             <div className='text-2xl sm:text-3xl mb-2 font-bold'>Contact</div>
			<div className="mb-2">
				<label className="formInputLabel" htmlFor="senderName">
                First name, last name 
				</label>
				<input
					className="formTextInput"
					id="name"
					type="text"
					name="senderName"
					placeholder="John Doe"
                    {...register('senderName', { required: true, minLength: 2, maxLength:50 })}
				/>
				{errors.senderName && <p className="text-red-500 text-xs italic mt-1">Name is required (between 2 and 50 characters)</p>}
            
			</div>
    
			<div className="mb-2">
				<label className="formInputLabel" htmlFor="email">
					Email
				</label>
				<input
					className="formTextInput"
					id="email"
					type="email"
					name="email"
					placeholder="johndoe@example.com"
					{...register('email', { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
				/>
				{errors.email && <p className="text-red-500 text-xs italic mt-1">Email is required</p>}
			</div>
            <div className="mb-2">
				<label className="formInputLabel" htmlFor="subject">
                Subject
				</label>
				<input
					className="formTextInput"
					id="subject"
					type="text"
					name="subject"
					placeholder="Great App!"
                    {...register('subject', { required: true, minLength: 2, maxLength: 150 })}
				/>
				{errors.subject && <p className="text-red-500 text-xs italic">Subject is required (between 2 and 150 characters)</p>}
			</div>
            <div className="mb-0">
				<label className="formInputLabel" htmlFor="message">
                Message
				</label>
				<textarea
					className="formTextInput h-32 mb-0"
					id="message"
					type="text"
					name="message"
					placeholder="Great App!"
                    {...register('message', { required: true, minLength: 6, maxLength:500 })}
				/>
				{errors.message && <p className="text-red-500 text-xs italic">Message text is required (between 6 and 500 characters) </p>}
			</div>

			<div className='mb-1'>
				<RCG result={captchaResult.bind(this)} /> 
				<input id="captchaInput" name="captchaInput" type="text"  required placeholder="Enter the numbers / letters in the image" 
					className="formTextInput -mt-4"
					{...register('captchaInput', { required: true})}
					onChange={captchaInputChanged}
				/>
				{(captchaValid === false && captchaInput !== '') && <p className="text-red-500 text-xs italic">Captcha input does not match image</p>}
			</div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
               disabled={errors.email !== undefined || errors.senderName !== undefined || errors.subject !== undefined || errors.message !== undefined || captchaValid === false}
			>
				Submit
			</button>
		</form>
    )
}
