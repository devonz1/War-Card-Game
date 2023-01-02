var expect = chai.expect;

describe("My function", function () {
    describe('#color', function () {
        const SUITS = ["♠", "♣", "♥", "♦"]
        it('should return black if the suit is ♣ or ♠ if not it should return red',
            function () {
                var x = color();
                expect(x).to.return('black' || 'red');
            });
    });
});