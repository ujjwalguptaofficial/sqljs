describe('Test delete Api', function () {
    it('delete with where', function (done) {
        var count;
        con.logStatus = true;
        con.$sql.run("count from Customers where Country = 'Sweden'").
            then(function (results) {
                count = results
            }).catch(function (err) {
                done(err);
            })

        con.$sql.run("delete from Customers where Country = 'Sweden'").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            })

        // console.log("request queue", con.req)
    });

    it('remove with or', function (done) {

        var count;
        con.$sql.run("Count * from Customers where Country='Mexico' || City='Madrid'").
            then(function (results) {
                count = results;
            }).catch(function (err) {
                done(err);
            })

        con.$sql.run("deLete from Customers where Country='Mexico' || City='Madrid'").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            })
    });

    it('remove with in', function (done) {

        var count;
        con.$sql.run("count from Customers where Country in ('Germany', 'France', 'UK')").
            then(function (results) {
                count = results;
            }).catch(function (err) {
                done(err);
            })

        con.$sql.run("delete from Customers where Country in ('Germany', 'France', 'UK')").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            })
    });

    it('remove with operator - != (for string)', function (done) {
        var count;

        con.$sql.run("count from Customers where Country != 'Mexico'").
            then(function (results) {
                count = results;
            }).catch(function (err) {
                done(err);
            });

        con.$sql.run("delete from Customers where Country != 'Mexico'").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            });
    });

    it('remove with operator - != (for number)', function (done) {
        var count;
        con.$sql.run("count from Products where Price!=20").
            then(function (results) {
                count = results;
            }).catch(function (err) {
                done(err);
            })

        con.$sql.run("delete from Products where Price!=20").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            })
    });

    it('remove with operator - >', function (done) {

        var count;
        con.$sql.run("count from Products where Price>20").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("delete from Products where Price>20").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove with operator - >=', function (done) {

        var count;
        con.$sql.run("count from Products where Price>=20").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("delete from Products where Price>=20").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove with operator - <', function (done) {

        var count;
        con.$sql.run("count from Products where Price<20").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("DELETE from Products where Price<20").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove with operator - <=', function (done) {
        var count;
        con.$sql.run("count from Products where Price<=20").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("DELETE from Products where Price<=20").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove with operator - between', function (done) {
        var count;

        con.$sql.run("count from Products where Price betWeen (10,20)").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("delete from Products where Price betWeen (10,20)").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove with like- "%or%"', function (done) {
        var count;

        con.$sql.run("count from Customers where CustomerName like '%or%' ").
            then(function (results) {
                count = results;
                done();
            }).catch(function (err) {
                done(err);
            })

        con.$sql.run("delete from Customers where CustomerName like '%or%' ").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (err) {
                done(err);
            })
    });

    it('remove with like- "%or"', function (done) {
        var count;
        con.$sql.run("count from Customers where CustomerName like '%or' ").
            then(function (results) {
                count = results;
                con.$sql.run("delete from Customers where CustomerName like '%or' ").
                    then(function (results) {
                        expect(results).to.be.an('number').to.equal(count);
                        done();
                    }).catch(function (results) {
                        done(err);
                    })
            }).catch(function (results) {
                done(err);
            });

    });

    it('remove with like- "or%"', function (done) {
        var count;
        con.$sql.run("count from Customers where CustomerName like 'or%' ").
            then(function (results) {
                count = results;
            }).catch(function (results) {
                done(err);
            })

        con.$sql.run("delete from Customers where CustomerName like 'or%' ").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(count);
                done();
            }).catch(function (results) {
                done(err);
            })
    });

    it('remove all - using promise', function (done) {
        var Count;
        con.$sql.run("count from Customers").
            then(function (results) {
                Count = results;
            }).catch(function (results) {
                done(err);
            });
        con.$sql.run("delete from Customers").
            then(function (results) {
                expect(results).to.be.an('number').to.equal(Count);
                done();
            }).
            catch(function (err) {
                done(err);
            });

    });

});