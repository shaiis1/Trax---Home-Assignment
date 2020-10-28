require('../app.js');
var expect = require('chai').expect;
var request = require('request');

describe('Basic GET POST tests', function () {
    it('should GET the greeting - Hi Trax! This is Shai Israeli', function() {
      request.get('http://localhost:4000/whos-there', function (error, response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal('Hi Trax! This is Shai Israeli') 
    });
    })
  
    it('Should GET all exsiting contacts', function () {
      request.get('http://localhost:4000/getAllContacts', function(error, response) {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.equal(JSON.stringify(contacts));
      });
    });

    it('Should GET error message - The requested contact name was not found!', function(){
        request.get('http://localhost:4000/getContactByName/avi', function(error, response) {
        expect(response.statusCode).to.equal(404);
        expect(response.body).to.equal('The requested contact name was not found!');
        });
    });

    it('Should GET the requested contact by the contact name', function(){
        request.get('http://localhost:4000/getContactByName/shai'), function(error, response) {
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal({ name: 'Shai', phone: '0503793797' })
        }
    })

    it('Should POST a new contact into the contacts array', function(){
        request.post('http://localhost:4000/addNewContact', 
        {json: {"name":"checkName","phone":"0523574492"}}, function(error, response){
            expect(response.statusCode).to.equal(200);
            expect(response.body).to.equal('Contact was added successfully!')
        })
    })
  });