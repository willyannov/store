import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Create Account', () => {
    
    
    it('Signup', function () {

        var user = signupFactory.user()

        signup.go()
        signup.fillform(user)
        signup.submitform()

    });

    context('Required fields', function() {
        var user = signupFactory.user()

        const messages = [

            {field: 'name', output: 'firstname is required.'},
            {field: 'lastname', output: 'lastname is required'},
            // {field: 'email', output: 'email is required.'}, Não são necessarios pq o site ja coloca nos campos
            //{field: 'anotherstreet', output: 'alias is required.'},
            {field: 'password', output: 'passwd is required.'},
            {field: 'street', output: 'address1 is required.'},
            {field: 'city', output: 'city is required.'},
            {field: 'postalcode', output: "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"},
            {field: 'state', output: 'This country requires you to choose a State.'},
            {field: 'phonenumber', output: 'You must register at least one phone number.'},

        ]

        before(function()  {
            
            signup.go()
            cy.get('#email_create').type(user.email)
            cy.get('.submit #SubmitCreate').click();
            signup.submitform()

            
        });

        messages.forEach(function(msg){

            it(`${msg.field} is required`, function() {
                signup.alertMessageShouldBe(msg.output)
                
            });
        })



        
        
    });

    it('Login', function () {

        var user = signupFactory.user()
        user.email = 'Ewald_Rogahn75@gmail.com'

        signup.go()
        signup.login(user)
        signup.submitlogin()

    });

    it('Login Incorrect', function () {

        signup.go()
        signup.submitlogin()
        signup.alertMessageShouldBe('There is 1 error')


    });



});