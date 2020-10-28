const express = require('express');
const bodyParser = require('body-parser');
let contacts = require('./contacts');
const app = express();
const port = 4000;
let contacts = require('./contacts');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET function for the first mission (whos-there)
app.get('/whos-there', function (req, res) {
    res.send('Hi Trax! This is Shai Israeli')
});

//-----Contacts Functions -----//
// GET function to return all contacts 
app.get('/getAllContacts', function (req, res) {
    res.send(JSON.stringify(contacts.contactsArray))
});

// POST function to add a new contact member to contacts array
app.post('/addNewContact', function (req, res) {
    contacts.addContact(req.body.name,req.body.phone )
    
    res.send('Contact:' + req.body.name +'has been added successfully!')
});

// GET function to return specific contact by the contact name
app.get('/getContactByName/:name',(request,response) => {
	const name = request.params.name;
	let contact = contacts.getContactByName(name);	// search for the requested contact name in the contacts array
	if(contact == undefined) // return error message if contact wasn't found in contacts array
	{
		response.send('contact was not found');
	}
	response.send(contact); // return contact details
});


//server is up and listening at port 4000(can change it manually in the code)
app.listen(port, function () {
    console.log(`Server is listening at http://localhost:${port}`)
});