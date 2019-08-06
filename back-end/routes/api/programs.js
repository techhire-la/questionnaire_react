const express = require('express');
const router = express.Router();
const config = require('config');
// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')



const Program = require('../../models/Program')

router.get('/test', (req, res) => res.send('Program Route'));


router.post('/addprogram', 
  
  async (req, res) => {
    console.log(req.body)
    console.log("post program route")
    
    try {

      console.log("in the try")

      const { 
        name,
        department,
        acceptReferrals,
        descriptionOfProgram,
        coreServicesOffered,
        populationServed,
        eligibilityRequirements,
        locationOfProgram,
        servicesOnlyOfferedAtProgramSite,
        contactPerson,
        email,
        phonenumber,
        altProgramName,
        location,
        clientAge,
        inSchool,
        veteran,
        interestedInTraining,
        interestedAfterSchoolPrograms,
        interestedInCriminalServices,
        interestedInCompletingDiploma,
        programHours 
    } = req.body;

    console.log("here")


    // console.log("program after first being set as a var: " + program)
    console.log(req.body)


      // program = new Program({
      //   name,
      //   department,
      //   acceptReferrals,
      //   descriptionOfProgram,
      //   coreServicesOffered,
      //   populationServed,
      //   eligibilityRequirements,
      //   locationOfProgram,
      //   servicesOnlyOfferedAtProgramSite,
      //   contactPerson,
      //   email,
      //   phonenumber,
      //   altProgramName,
      //   location,
      //   clientAge,
      //   inSchool,
      //   veteran,
      //   interestedInTraining,
      //   interestedAfterSchoolPrograms,
      //   interestedInCriminalServices,
      //   interestedInCompletingDiploma,
      //   programHours 
      // });

      console.log("program after setting the a value of the variable")
      // console.log(program)
      // console.log(req.body)
      // await program.save();

    }catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

  }
)
// router.post('/addprogram', 


// )
// // const { name, email, password } = req.body;

//     try {

//       const { 
//         name,
//         department,
//         acceptReferrals,
//         descriptionOfProgram,
//         coreServicesOffered,
//         populationServed,
//         eligibilityRequirements,
//         locationOfProgram,
//         servicesOnlyOfferedAtProgramSite,
//         contactPerson,
//         email,
//         phonenumber,
//         altProgramName,
//         location,
//         clientAge,
//         inSchool,
//         veteran,
//         interestedInTraining,
//         interestedAfterSchoolPrograms,
//         interestedInCriminalServices,
//         interestedInCompletingDiploma,
//         programHours 
//     } = req.body;

//       program = new Program({
//         name,
//         department,
//         acceptReferrals,
//         descriptionOfProgram,
//         coreServicesOffered,
//         populationServed,
//         eligibilityRequirements,
//         locationOfProgram,
//         servicesOnlyOfferedAtProgramSite,
//         contactPerson,
//         email,
//         phonenumber,
//         altProgramName,
//         location,
//         clientAge,
//         inSchool,
//         veteran,
//         interestedInTraining,
//         interestedAfterSchoolPrograms,
//         interestedInCriminalServices,
//         interestedInCompletingDiploma,
//         programHours 
//       });

//       await program.save();

//     // jwt payload we use user id
//     // also, mongoose uses an abstraction so that we can use 'id' instead of '_id'
//     //   const payload = {
//     //     user: {
//     //       id: user.id
//     //     }
//     //   };




module.exports = router;