import axios from 'axios';

export const productRequest = async () =>
	await axios
		.get('http://localhost:3000/miista-export.json')
		.then((res) => {
			return res?.data?.data?.allContentfulProductPage?.edges;
		})
		.catch((err) => console.log(err));
