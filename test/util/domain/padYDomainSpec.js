(function(d3, fc, sc) {
    'use strict';

    describe('sc.util.domain.padYDomain', function() {

        var domain;
        var reversedDomain;

        beforeEach(function() {
            domain = [100, 150];
            reversedDomain = [150, 100];
        });

        it('should pad the domain by a positive percentage', function() {
            expect(sc.util.domain.padYDomain(domain, 0.1)).toEqual([95, 155]);
            expect(sc.util.domain.padYDomain(reversedDomain, 0.1)).toEqual([155, 95]);
        });

        it('should pad the domain by a negative percentage', function() {
            expect(sc.util.domain.padYDomain(domain, -0.1)).toEqual([105, 145]);
            expect(sc.util.domain.padYDomain(reversedDomain, -0.1)).toEqual([145, 105]);
        });

        it('should pad the domain by nothing when the percentage is zero', function() {
            expect(sc.util.domain.padYDomain(domain, 0)).toEqual([100, 150]);
            expect(sc.util.domain.padYDomain(reversedDomain, 0)).toEqual([150, 100]);
        });

        it('should pad a specific side of the domain by a positive percentage', function() {
            var paddingPercentage = [0, 0.1];
            var reversedPaddingPercentage = [0.1, 0];
            expect(sc.util.domain.padYDomain(domain, paddingPercentage)).toEqual([100, 155]);
            expect(sc.util.domain.padYDomain(reversedDomain,
                reversedPaddingPercentage)).toEqual([155, 100]);
        });

        it('should pad a specific side of the domain by a negative percentage', function() {
            var paddingPercentage = [-0.1, 0];
            var reversedPaddingPercentage = [0, -0.1];
            expect(sc.util.domain.padYDomain(domain, paddingPercentage)).toEqual([105, 150]);
            expect(sc.util.domain.padYDomain(reversedDomain,
                reversedPaddingPercentage)).toEqual([150, 105]);
        });

        it('should be able to pad the sides of the domain independently', function() {
            var paddingPercentage = [-0.1, 0.1];
            var reversedPaddingPercentage = [0.1, -0.1];
            expect(sc.util.domain.padYDomain(domain, paddingPercentage)).toEqual([105, 155]);
            expect(sc.util.domain.padYDomain(reversedDomain,
                reversedPaddingPercentage)).toEqual([155, 105]);
        });

        it('should pad the domain by nothing when the percentage array is zero', function() {
            var paddingPercentage = [0, 0];
            var reversedPaddingPercentage = [0, 0];
            expect(sc.util.domain.padYDomain(domain, paddingPercentage)).toEqual([100, 150]);
            expect(sc.util.domain.padYDomain(reversedDomain,
                reversedPaddingPercentage)).toEqual([150, 100]);
        });

    });
}(d3, fc, sc));
