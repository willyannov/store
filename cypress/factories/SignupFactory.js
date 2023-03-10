var faker = require('faker')

export default {

    user: function () {

        var data = {
            name: 'Willyan',
            lastname: 'Moraes',
            email: faker.internet.email(),
            password: '123123123',
            phonenumber: '2124567890',
            birthday: {
                day: '25',
                month: 'January',
                year: '2000'
            },
            address: {
                street: 'Iroquois Drive',
                city: 'Orlando',
                state: 'Florida',
                postalcode: '32835',
                anotherstreet: '191 Homewood Ave. Tampa'

            }
        }

        return data
    }
}