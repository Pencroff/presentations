# Data tier in JS app

I will describe role and advantages. Solutions available on the market. Approaches with adapter based implementation.

+ Idea
+ Advantages
    + One place for DB related code
        + Possible to extend number of storage\'s (SQL, NoSQL)
        + Change storage (SQL <=> NoSQL)
    + Database agnostic interface for client 
    + Common contract for all models 
    + Unit testing
    + Reduces the amount of code
+ Complex scenarios
    + Caching mechanisms
    + Providing audit logging
    + Providing record level security system
+ Disadvantages
    + Performance
    + Hidden specific feature DB
    + You should know what happen behind the scene
    + N+1 issue
+ Kinds 
    + One DB engine
    + Adapter based
    + OData solutions 
Adapter based:
+ ExtJs (just client)
+ Ember.data (just client)
+ Waterline (just server)
+ Falcor.js (just server with one connection point)
+ Js-Data (both of them)

+ PounchDb (client for CouchBase / CouchDb)
+ Mongoose (ODM for mongo)
+ OData solutions (JayData, Breeze.js)