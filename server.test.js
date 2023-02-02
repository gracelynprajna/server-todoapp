import request from "supertest";
import createServer from "./server.js";

const server = await createServer();

describe("Just testing the server", function(){
    describe("testing the /todo route", function(){
        it("Should be unable to get todos without flag", function(done){
            request(server).get("/todo").expect(401).end(function(err){
                if(err){
                    throw err;
                }else {
                    done();
                }
            })
        })
    })
});