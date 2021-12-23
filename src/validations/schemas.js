import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(5, 'Username must be at least 5 characters'),

	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be at least 5 characters'),
});
