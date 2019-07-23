const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = "<emphasis level=\"moderate\"> Hi friends! My name is Alexa. </emphasis>" +
        "<emphasis level=\"moderate\"> Today, I will be helping you through winding down after a long day. </emphasis>" + 
        "<emphasis level=\"moderate\"> We have routines for elementary school, middle school, and high school students, which would you like? </emphasis>";
        const repromptText = "<emphasis level=\"moderate\"> Do you want a routine for elementary, middle, or high schoolers? </emphasis>";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
            
    }
};

const GetAgeGroupIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetAgeGroupIntent';
    },
    handle(handlerInput) {
        const speechText = 
            "<emphasis level=\"moderate\"> Starting the calming routine. </emphasis> <break time='1s'/>" +
            "<emphasis level=\"moderate\"> Let's take the next few moments to do some deep breathing. </emphasis> <break time='1s'/>" + 
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Repeat this process one more time. <break time='3s'/> Let me know when you are ready so we can continue with our exercise. </emphasis>";
            
        const repromptText = "Sorry, I didn't catch that. Are you ready to begin?";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

const StretchIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'StretchIntent';
            
    },
    handle(handlerInput) {
        const speechText = 
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Relax your muscles. <break time='1s'/> Raise your arms up to the sky. Reach as far as you can. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Slowly - keeping your arms stretched - reach down and touch your toes. Stay there. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Breathe out. Would you like more stretching? Say keep stretching to continue or say next activity to move on. </emphasis> <break time='2s'/>";
        const repromptText = "Would you like more stretching? Say keep stretching to continue or say next activity to move on.";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

const StretchIntentContHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'StretchIntentTwo';
            
    },
    handle(handlerInput) {
        const speechText = 
            "<emphasis level=\"moderate\"> Breathe in. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Breathe out. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Slowly lift back upright. <break time='1s'/> Stretch your arms out to your sides. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Rotate your arms in small circles. Focus on your deep breathing. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Slow down. Let your arms fall back to your sides. </emphasis> <break time='2s'/>" + 
            "<emphasis level=\"moderate\"> Breathe in. <break time='1.5s'/> Breathe out. </emphasis> <break time='2s'/>" +
            "<emphasis level=\"moderate\"> Remember throughout this exercise to monitor your breathing. <break time='2s'/> Say next activity when you are ready to move on. </emphasis>";
        const repromptText = "<emphasis level=\"moderate\"> Sorry, I didn't catch that! Say next activity when you are ready to move on. </emphasis>";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

const PositiveAffirmationsIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PositiveAffirmationsIntent';
            
    },
    handle(handlerInput) {
        const speechText = 
            "<emphasis level=\"moderate\"> Find a friend to do this activity with. </emphasis>" +
            "<emphasis level=\"moderate\"> If you are by yourself, that's ok too. <break time='1s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Let's start by saying 1 good thing that has happened to you today <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Awesome! That was great to hear. <break time='1s'/> Now, let's say 1 thing that you look forward to later on </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='3s'/> Amazing! Now, let's reflect on some things that might not have gone so well. </emphasis>" +
            "<emphasis level=\"moderate\"> Say one thing that didn't work out so well. <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Sometimes things don't always go as planned. Luckily, tomorrow is a new day! How do you plan to make tomorrow a better day? <break time='3s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> Great! We are definitely on track to have happy days, let's celebrate! </emphasis>" + 
            "<emphasis level=\"moderate\"> Are you ready for the final activity? Say Let's Go! to begin. </emphasis>";
        const repromptText = "Sorry! I didn't catch that. Say Let's Go! to begin the final activity.";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(repromptText)
            .getResponse();
    }
};

const FinalActivityIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'FinalActivityIntent';
            
    },
    handle(handlerInput) {
        const speechText =            
            "<emphasis level=\"moderate\"> To finish off our activity, let's do some final reflections. <break time='1s'/> Get in your best superhero pose. Make sure you stand tall! </emphasis>" +
            "<emphasis level=\"moderate\"> Breathe in. <break time='1s'/> Breathe out. As each of us go about our day, remember what it means to be a member of the Boys and Girls Club. </emphasis>" +
            "<emphasis level=\"moderate\">  <break time='1s'/> Repeat after me. <break time='1s'/> I am a leader in my community. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='2s'/> Breathe in. <break time='1s'/> Breathe out, repeat after me. I am strong. <break time='1s'/> I am loved. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='1s'/> <break time='1s'/> Breathe in. <break time='1s'/> Breathe out. </emphasis>" +
            "<emphasis level=\"moderate\"> <break time='1s'/> A true leader learns to take control over a hard time and spin it to have a positive ending. <break time='1s'/> </emphasis>" +
            "<emphasis level=\"moderate\"> We've made it to the end of the guided meditation! Congratulations! I hope to see you soon! </emphasis>";
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
    
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Okay! Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GetAgeGroupIntentHandler,
        StretchIntentHandler,
        StretchIntentContHandler,
        PositiveAffirmationsIntentHandler,
        FinalActivityIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .lambda();