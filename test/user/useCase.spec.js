
const UseCaseLogin = require('../../src/usesCases/User/Login');
const { GenerateJWT } = require('../../src/common/helpers/generateToken');


const shajs = require('sha.js');

const { UsersRepository } = require('../../src/persistance/inDatabaseUserRepository');
jest.mock('../../src/persistance/inDatabaseUserRepository');
jest.mock('../../src/common/helpers/generateToken');


describe('Login', () => {
    let expectUser = {
        idUser: "abc123",
        email: "admin@gmail.com",
        password: 123456
    };

    beforeEach(async() => {
        const newPassword = await shajs('sha256').update('123456').digest('hex');
        expectUser.password = newPassword;

        GenerateJWT.mockClear();
    });
    
    test('Should return Data', async() => {
        const mockGetByEmail = jest.fn();
        UsersRepository.prototype.getByEmail = mockGetByEmail;
        mockGetByEmail.mockReturnValue(Promise.resolve(expectUser));

        const useCaseLogin = UseCaseLogin();
        const result = await useCaseLogin.Execute('admin@gmail.com','123456');
        expect(expectUser).toBe(result.data);
    });

    test('Should return TOKEN', async() => {
        const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiYWJjMTIzIiwiaWF0IjoxNjY2NzcxMTgxLCJle';
        GenerateJWT.mockReturnValue(expectedToken);

        const useCaseLogin = UseCaseLogin();
        const result = await useCaseLogin.Execute('admin@gmail.com','123456');
        expect(expectedToken).toBe(result.token);
    });


});
