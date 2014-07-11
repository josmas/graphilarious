# Graphilarious
Visualisation app powered by d3 and Angular.js

## Loads of TODOs
Will add more info here, and also instructions on how to hook eveything up.

The main idea is to have a Graph visualisation powered by d3.js with data coming from a neo4j database.


### Dev notes
These are very early dev notes; mostly brain dumps and things I think about and need to write down somewhere… will format at some point.

#### Bit of overall architecture
This is a front-end app based on angular. The data to visualize will be pushed directly through an angular service and will come directly from the neo4j REST API. No back-end is planned at the moment (I hope I can encapsulate all the business logic in services; don't know much about it at the moment though; if it gets unwidely, I could create a node module and use browserify?).

#### Deployment
It looks like heroku offers and addon through [GrapheneDB](https://beta.graphenedb.com/) which is a company that provides neo4j as a service. More [info](http://www.neo4j.org/develop/heroku).



More to come soon...

Jos;2o14