/**
 * TestAPIController
 *
 * @description :: Server-side logic for managing testapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var md5 = require('md5');

module.exports = {
	
//};


  action1: function (req, res) {
    console.log("KKUEI: in controller action1()");
    console.log( md5('abc') );  // this line works
    // console.log(sails.md5('abc')); // this line didn't work

    console.log(req.query.kkuei);
    
    TestAPI.method1();
    return res.json({ key1: 'value1' });
  } // endOf action1


}; // endOf module.exports

