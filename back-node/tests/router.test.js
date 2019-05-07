// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server')
const burl = require('../config/config').burl;

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Peaks Marvel", () => {
    describe("GET /peaks", () => {
        // Test to get all Marvel record
        it("should get Marvel Object ", (done) => {
             chai.request(app)
                 .get('/peaks')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

         // Test to get 20 Marvel record
        it("should get 20 Marvel Object ", (done) => {
            chai.request(app)
                .get('/peaks')
                .end((err, res) => {
                    res.body.should.have.property('data');
                    res.body.data.should.have.property('results').with.lengthOf(20);
                    done();
                 });
        });
    });

    describe("GET *", () => {
        // Test all other routes
        it("should get 404 status ", (done) => {
             chai.request(app)
                 .get('/other')
                 .end((err, res) => {
                     res.should.have.status(404);
                     res.body.should.be.a('object');
                     res.body.error.should.equal('404 Not Found');
                     done();
                  });
         });
    });
});