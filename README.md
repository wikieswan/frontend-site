# frontend-site

this project is a front-end site deployment demo.

project organization

	|- backendServer
		java or .net server or others 
		data api provider

	|- frontendServer
		node server ,whith html template render here.
		this most function is to render html page ues api data and node template

	|- staticServer
		nginx server
		static rescources include js css and images e,g.



		export NODE_ENV=production
Or if you are in windows you could try this:

SET NODE_ENV=production
or you can run your app like this:

NODE_ENV=production node app.js
You can also set it in your js file:

process.env.NODE_ENV = 'production';