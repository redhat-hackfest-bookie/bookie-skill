# Welcome to the Alexa bookie-skill
Team Bookie has create a Sports betting skill for Alexa-enabled devices for the Red Hat Quarkus Hackfest.

Sport Bookie enables users to predict a winner between two sports teams. It uses a sports simulation API to perform the analysis of each team. Alexa uses this analysis to determine which team would win. 

### Interaction
You can invoke the Sport Bookie skill by saying, 

> _Alexa, launch my bookie_

Asking for a prediction takes one of the following two forms:

> _Who would win between {Team 1} and {Team 2} in the {Sport Abbrev.}?_

or

> _to predict between {Team 1} and {Team 2} in the {Sport Abbrev.}?_

For example, 

> _Who would win between Arizona and Seattle in the NFL?_

Alexa should respond with either Arizona or Seattle. 

### Supported Sport Abbrev.
The simulation API we are using supports 6 sports. These are as follows:

* NFL
* College Football (CFB)
* NBA
* College Basketball (CBB)
* MLB
* NHL

### Examples
> _Alexa, ask my bookie who would win between Arizona and Seattle in the NFL?_
> _Alexa, ask my bookie who would win between Vermont and VCU in the CBB?_
