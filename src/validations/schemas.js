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

export const signupSchema = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(5, 'Username must be at least 5 characters'),

	firstName: yup.string().required('First name is required'),

	lastName: yup.string().required('Last name is required'),

	businessName: yup.string().required('Business name is required'),

	jobTitle: yup.string().required('Job title is required'),

	location: yup.string().required('Location is required'),

	avatarImg: yup.string().required('Profile picture is required'),

	password: yup
		.string()
		.required('Password is required')
		.min(5, 'Password must be at least 5 characters'),
});
