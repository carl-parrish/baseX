let baseX = require('../utils/index.js');

describe('Utils test suite', () => {
    it('should return converted binary', () => {
        const binary = baseX(23, 2);
        expect(binary).toBe((23 >>> 0).toString(2));
    }), 
    it('should return Base64', () => {
        const base64 = baseX(125, 64);
        expect(base64).toBe('125'.toString(64));
    })
});