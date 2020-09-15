const validateLoginInfo = require('../src/components/Login/validateLoginInfo');
const login = require('../src/components/Login/validateLoginInfo')

describe("LOGIN FONTEND", () => {
    it("no inputs", () => {
        const response = validateLoginInfo()
        expect(response).toEqual('null_error')
    });
    it("non valid username", () => {
        const response = validateLoginInfo('a', 'Asdf1234')
        expect(response).toEqual('username_error')
    });
    it("username is Username", () => {
        const response = validateLoginInfo('Username', 'Asdf1234')
        expect(response).toEqual('username_error')
    });
    it("non valid password", () => {
        const response = validateLoginInfo('aaaa', 'asdf')
        expect(response).toEqual('password_error')
    });
    it("non valid username and password", () => {
        const response = validateLoginInfo('a','a')
        expect(response).toEqual('username_password_error')
    });
});