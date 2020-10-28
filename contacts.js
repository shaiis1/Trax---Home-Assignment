const addContact = function(name, phoneNumber){
    let contactDetails = { name: name, phone: phoneNumber }
    contactsArray.push(contactDetails)
  }
  
  const getContactByName = function(name){
      return contactsArray.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  }
  
  let contactsArray = [{ name: 'Shai', phone: '0503793797' },
   {  name: 'Moran', phone: '0542248433'  },
    {  name: 'Sarai', phone: '0503793796'  }, 
    {  name: 'Guy', phone: '0505568794'  },
  { name: 'Benny', phone: '0507821635' },
  { name: 'Yossi', phone: '0507821689' }]
  
  module.exports = {
    contactsArray: contactsArray,
    addContact: addContact,
    getContactByName: getContactByName,
  }