const fs = require ('fs');

const saveData = (data) =>{

    fs.writeFile('output.json', JSON.stringify(data, null, 3), (err) => {
        if(err){
            throw err;
        }
        console.log("Succes! Datele au fost scrise in fisier. ");
    });
};
module.exports = saveData;