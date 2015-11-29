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
    + Manual ($http in angular, direct access to DB drivers from app logic)
        + Usually most flexible but and take a lot of efforts and developers qualification 
    + One DB engine
        + Mongoose - MongoDb
        + Sequelize - SQL
        + Nohm - Redis
    + OData solutions (JayData, Breeze.js)
        + Formalized query syntax between client and server
        + It's complex solution for client - server + db (not possible to use it without support on client and server)
    + Adapter based
        + ExtJs (just client) - not clean data tier
            + Browser storages (session storage, local storage)
            + Remote api (ajax, rest, jsonp)
            + Main role - providing data for ui-controls 
        + Ember.data (just client)
            + Adapters (RESTAdapter, ActiveModelAdapter, FixtureAdapter)
        + Waterline (just server)
            + Supported adapters - PostgreSQL, MySQL, MongoDB, Redis, Disk, Memory
            + Huge number adapters from community, including Twitter and JSDom
            + Support some kind of migration mechanism 
        + Falcor.js from Netflix (just server with one connection point)
            + One point on client - virtual JSON graph
            + Many data sources on server
            + Promise based
        + PouchDB
            + It's using different engines in different environments:
                + SQLite for mobiles
                + LevelDB for node
                + IndexedDB, WebSQL for browser
                + Extendable by adapters
            + For me most valuable feature of PouchDB - internal replication mechanism
        + Js-Data (client + server - Inspired by Ember Data)
            + Client adapters (firebase, http, localforage, localstorage)
            + Server adapters (firebase, levelup, mongodb, redis, rethinkdb, sql)
    + Main concept in js-data
    + Js-data features
        + Async and Sync methods
        + Model lifecycle and hooks
        + Events
        + Static and instance methods, computed properties
        + Query syntax
        + Relations
        + Validations
        + Change Detection
    + Useful examples
        + Query middleware for express
        + Hybrid adapter (http + localstorage)
    + Questions
        + [js-data](//www.js-data.io/)
    