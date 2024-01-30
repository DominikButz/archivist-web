'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Spinner from './spinner';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { sendContactForm } from '@/lib/api';

export default function ContactForm() {

	const {theme, setTheme} = useTheme();

	useEffect(()=> {
	
		const backgroundColor = theme === 'light' ? 'whitesmoke' : '#0d1117'
		const textColor = theme === 'light' ? '#0d1117' : 'whitesmoke' 
		loadCaptchaEnginge(6, backgroundColor, textColor)
	}, [])

    const { register, handleSubmit, reset, getValues, formState: { errors }} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
      });

	const testValues = {
		'senderName' : 'John Doe',
		'email': 'dominikbutz@gmail.com',
		'subject' : 'Great app',
		'message': 'This is the greatest app since the lauch of iPhone 1!'
	}

	const [captchaInput, setCaptchaInput] = useState('');
	const [captchaValid, setCaptchaValid] = useState(false)
	const [isLoading, setIsLoading] = useState(false);

	
	const captchaInputChanged = (event) => {
		const text = event.target.value
		setCaptchaInput(text)
		// console.log('captcha solution ' + captcha)
		// console.log('captcha input ' + text)
		const captchaIsValid = validateCaptcha(text, false)
		console.log('captcha valid ' + captchaIsValid)
		setCaptchaValid(captchaIsValid)
	}

    const onSubmit = async (data) => {
		setIsLoading(true)
        console.log('errors ' + errors.email)
		console.log(data)
		if (validateCaptcha(captchaInput) === false) {

			return
		}
		try {
			console.log('sending request')
			const response = await sendContactForm(data)
			const message = await response.message
			console.log(`response ${message}`)
		
			reset()
			setCaptchaInput('')
			setCaptchaValid(false)
			setIsLoading(false)
		} catch(error) {
			console.log('logging on client: ' + error.message)
			setIsLoading(false)
		}
 
		
	};

	// const updateSubmitButtonState = () => {
	// 	const valueMissing = getValues('senderName').length < 2 || getValues('email').length === 0 || getValues('subject').length < 2 || getValues('message').length < 6 || getValues('captchaInput').length == 0
	// 	const hasErrors = errors.email !== undefined || errors.senderName !== undefined || errors.subject !== undefined || errors.message !== undefined || captchaValid === false
	// 	return valueMissing || hasErrors
	// }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
             <div className='text-2xl sm:text-3xl mb-2 text-stone-800 dark:text-stone-50 font-bold'>Contact</div>
			<div className="mb-2">
				<label className="formInputLabel" htmlFor="senderName">
                First name, last name 
				</label>
				<input
					className="formTextInput"
					id="senderName"
					type="text"
					name="senderName"
					placeholder="John Doe"
                    {...register('senderName', { required: true, minLength: 2, maxLength:50})}
				/>
				<p className={`text-red-500 text-xs italic mt-1  ${errors.senderName === undefined  && 'invisible'} `}>Name is required (between 2 and 50 characters)</p>
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
				 <p className={`text-red-500 text-xs italic mt-1  ${errors.email === undefined  && 'invisible'} `}>Email is required</p>
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
				<p className={`text-red-500 text-xs italic mt-1  ${errors.subject === undefined  && 'invisible'} `}>Subject is required (between 2 and 150 characters)</p>
			</div>
            <div className="mb-0">
				<label className="formInputLabel" htmlFor="message">
                Message
				</label>
				<textarea
					className="formTextInput"
					rows={5}
					id="message"
					type="text"
					name="message"
					placeholder="Great App!"
                    {...register('message', { required: true, minLength: 6, maxLength:500 })}
				/>
				<p className={`text-red-500 text-xs italic ${errors.message === undefined  && 'invisible'} `}>Message text is required (between 6 and 500 characters) </p>
			</div>

			<div className='mt-2'>
				{/* <RCG result={captchaResult.bind(this)} />  */}
				<LoadCanvasTemplate />
				<input id="captchaInput" name="captchaInput" type="text"  required placeholder="Enter the numbers / letters in the image" 
					className="formTextInput mt-2"
					{...register('captchaInput', { required: true})}
					onChange={captchaInputChanged}
				/>
				<p className={`text-red-500 text-xs italic mt-1 ${(captchaValid || captchaInput === '')  && 'invisible'} `}>Captcha input does not match image</p>
			</div>
			<button
				className="bg-indigo-500 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
               disabled={errors.email !== undefined || errors.senderName !== undefined || errors.subject !== undefined || errors.message !== undefined || captchaValid === false}
			>
				<div className='flex flex-row'>
					{isLoading &&  <Spinner />} 
					{isLoading === false && 'Submit'}
					{isLoading && 'Submitting ...'}
				</div>
			</button>
		</form>
    )
}
