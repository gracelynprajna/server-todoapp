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
        });
        it("should be able to create a new todo", function (done){
            request(server).post("/todo?admin=true").send({
                todo: "clean the garage"
            }).set("Accept", "application/json").expect(200).end(function(err,response){
                if(err){
                    throw err;
                } else{
                    console.log(response);
                    expect(response.body).toEqual({success:true});
                    done();
                }
            })
        });
        it("should be able to delete a todo", function(done){
            request(server).del("/todo?admin=true").set("Accept", "application/json").expect(200).end(function(err){
                if(err){
                    throw err;
                }else {
                    done();
                }
            })
        });
        it("should be able to update a todo", function(done){
            request(server).put("/todo?admin=true").send({"todo": "todo was changed"}).set("Accept", "application/json").expect(200).end(function(err){
                if(err){
                    throw err;
                }else {
                    done();
                }
            })
        });
        it("should be able to get a todo", function(done){
            request(server).get("/todo?admin=true").expect(200).end(function(err){
                if(err){
                    throw err;
                }else{
                    done();
                }
            })
        })
    })
});



// describe("testing the /todo route", () => {
//     it("/todo should get back a 200", (done) => {
//         request(server).get("/data").expect(200).end((err) => {
//             if(err){
//                 throw err;
//             } else {
//                 done();
//             }
//         })
//     });

//     it("/data should display my name", (done) => {
//         request(server).get("/data").expect(200).end((err, response) => {
//             if(err){
//                 throw err;
//             } else {
//                 console.log(response.body.data.name);
//                 expect(response.body.data.name).toBe("grace")
//                 done();
//             }
//         })
//     })
// })