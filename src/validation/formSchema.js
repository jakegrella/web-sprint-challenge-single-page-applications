import * as yup from 'yup';

export default yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name must be at least 2 characters')
		.required('Name is required'),
	size: yup
		.string()
		.oneOf(['small', 'medium', 'large'], 'Pizza size is required'),
	sauce: yup
		.string()
		.oneOf(
			['originalRed', 'garlicRanch', 'bbqSauce', 'spinachAlfredo'],
			'Sauce choice is required'
		),
	pepperoni: yup.boolean(),
	sausage: yup.boolean(),
	canadianBacon: yup.boolean(),
	spicyItalianSausage: yup.boolean(),
	grilledChicken: yup.boolean(),
	onions: yup.boolean(),
	greenPepper: yup.boolean(),
	dicedTomatoes: yup.boolean(),
	blackOlives: yup.boolean(),
	roastedGarlic: yup.boolean(),
	artichokeHearts: yup.boolean(),
	threeCheese: yup.boolean(),
	pineapple: yup.boolean(),
	extraCheese: yup.boolean(),
	glutenFreeCrust: yup.boolean(),
	specialInstructions: yup.string(),
});
