import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta name='application-name' content='Products filter' />
					<meta name='apple-mobile-web-app-title' content='Products filter' />
					<meta name='description' content='Products filter with pagination' />

					<link rel='manifest' href='/manifest.json' />
					<link
						href='/icons/icon-16x16.png'
						rel='icon'
						type='image/png'
						sizes='16x16'
					/>
					<link
						href='/icons/icon-32x32.png'
						rel='icon'
						type='image/png'
						sizes='32x32'
					/>
					<link rel='apple-touch-icon' href='/icons/apple-icon.png' />
					<meta name='theme-color' content='#50a2ee' />
				</Head>
				<body className='container mx-auto bg-[#F8F5EE] font-sans'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
