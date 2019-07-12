const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    acceptReferrals: {
        type: String,
    },

    descriptionOfProgram: {
        type: String,
    },

    coreServicesOffered: {
        type: String,
    },

    populationServed: {
        type: String,
    },

    eligibilityRequirements: {
        type: String,
    },

    locationOfProgram: {
        type: String,
    },

    servicesOnlyOfferedAtProgramSite : {
        type: String,
    },

    email: {
        type: String,
    },

    phonenumber: {
        type: String,
    },

    altProgramName: {
        type: String,
    },

    location: {
        type: String,
    },

    clientAge: [
        {
            type: String,
        }
    ],

    inSchool: [
        {
            type: String,
        }
    ],

    veteran: {
        type: String,
    },

    interestedInTraining: {
        type: String,
    },

    interestedAfterSchoolPrograms: {
        type: String,
    },

    interestedInCriminalServices:{
        type: String,
    },

    interestedInCompletingDiploma:{
        type: String,
    },

    programHours: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    }

});



 module.exports = Program = mongoose.model('program', ProgramSchema); 