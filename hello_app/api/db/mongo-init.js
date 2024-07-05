db = db.getSiblingDB('deb');

db.greetings.insertMany([
    {"greetings":"Hello Calicut"},
    {"greetings":"Hello Kerala"},
    {"greetings":"Hello India"},
    {"greetings":"Hello World"}

]);