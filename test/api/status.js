var expect = require('chai').expect;
var server = require('../../lib/server');
var api = require('../api-helper')(); 
var app = server(['hello']); 

describe('Status API', function () {

    before(function () {
        app.start();
    });

    it('should create a status', function (done) {
        var newStatus = {
            username: 'testuser' + moment().valueOf(),
            status: 'test status' + moment().valueOf()
        };

        var createStatusEndpoint = {
            url: '/status',
            method: 'POST',
            body: JSON.stringify(newStatus)
        };

        api(createStatusEndpoint, function (err, res, body) {
            done();
        });
    });
    it('should retrive a status');
    it('should modify a status');
    it('should remove a status')
});
