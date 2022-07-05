		
		const express = require('express'),
			  mongoose = require('mongoose'),
			  flash = require('connect-flash'),
			  session = require('express-session'),
			  passport = require('passport'),
			  path = require('path'),
		      app = express();
			  const port = process.env.port || 3000;

		      //PASSPORT CONFIG
		      require('./config/passport')(passport);

		      //DB CONFIG
		      const db = require('./config/keys').mongoURI;
		      mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true});

		      //EJS
		     // app.use(expressLayouts);
		      app.set('view engine', 'ejs');

		      //BODY PARSER
		      app.use(express.urlencoded({extended:false}));
		      app.use(express.static("public"));

		      //EXPRESS-SESSION MIDDLEWARE
		      app.use(session({
		      		secret: 'secret',
		      		resave: true,
		      		saveUninitialized: true
		      }));

		      //PASSPORT MIDDLEWARE
		      app.use(passport.initialize());
		      app.use(passport.session());

		       //CONNECT FLASH
		      app.use(flash());

		      //GLOBAL VARS
		      app.use((req, res, next) => {
		      	res.locals.success_msg = req.flash('success_msg');
		      	res.locals.error_msg = req.flash('error_msg');
		      	res.locals.error = req.flash('error');
		      	next();
		      });


		      app.use('/', require('./routes/index'));
		       app.use('/', require('./routes/users'));

			   app.listen(port, console.log(`Listening on port ${port}`));



		