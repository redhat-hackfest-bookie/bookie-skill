/* *
 * Language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: `Hello! I am a sport bookie. I can make a prediction on what two sport teams would win. I know NFL, MLB, NHL, CBB, CFB, and NBA. You can just say, "who would win between Dallas and New England in the NFL" and I will make a prediction. What would you like me to predict?`,
            WELCOME_REPROMPT_MSG: `Sorry, What would you like me to predict?`,
            PREDICT_MESSAGE: `That's a good match! I would bet on {{team}}.`,
            PREDICT_HARD_MESSAGE: `Wow, what a tough match! I would go with {{team}}.`,
            HELP_MSG: `You can tell me your two teams and I'll tell you who would win. I know NFL, MLB, NHL, CBB, CFB, and NBA. You can just say, "who would win between team 1 and team 2 in the sport" and I will make a prediction. For eample, say "who would win between Carolina and Boston in the NHL?". Which one would you like to try?`,
            GOODBYE_MSG: `Good Luck with your team!`,
            REFLECTOR_MSG: `You just triggered {{intentName}}`,
            ERROR_MSG: `Sorry, I couldn't understand what you said. Can you say it again?`,
            ERROR_TIMEZONE_MSG: `I can't determine your timezone. Please check your device settings and make sure a timezone was selected. After that please reopen the skill and try again!`
        }
    }
}
