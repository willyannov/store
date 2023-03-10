

//class SignupPage {
//
//    go() {
//        cy.visit('/index.php');
//        cy.get('.login').click();
//        cy.get('#create-account_form .page-subheading').should('have.text', 'Create an account');
//
//    }
//    fillform(user) {
//
//        //Usando a maioria dos get com ID de seletor
//        cy.get('#email_create').type(user.email)
//        cy.get('.submit #SubmitCreate').click();
//        cy.get('.radio-inline [type=radio]').check('1').should('be.checked');
//        cy.get('#customer_firstname').type(user.name);
//        cy.get('#customer_lastname').type(user.lastname);
//        cy.get('#email').clear().type(user.email);
//        cy.get('#passwd').type(user.password);
//        cy.get('#days').select(user.birthday.day);
//        cy.get('#months').select(user.birthday.month);
//        cy.get('#years').select(user.birthday.year);
//
//        //Usando a maioria dos get com INPUT de seletor
//        cy.get('input[name=firstname]').clear().type(user.name);
//        cy.get('input[name=lastname]').clear().type(user.lastname);
//        cy.get('input[name=address1]').type(user.address.street);
//        cy.get('input[name=city]').type(user.address.city);
//        cy.get('#id_state').select(user.address.state);
//        cy.get('input[name=postcode]').type(user.address.postalcode);
//        cy.get('input[name=phone_mobile]').type(user.phonenumber);
//        cy.get('input[name=alias][type=text]').clear().type(user.address.anotherstreet);
//
//    }
//
//    submitform() {
//        cy.get('[name=submitAccount]').click();
//
//    }
//    login(user) {
//
//        cy.get('#email').type(user.email);
//        cy.get('#passwd').type(user.password);
//    }
//
//    submitlogin() {
//        cy.get('#SubmitLogin').click();
//
//    }
//    alertMessageShouldBe(expectedMessage) {
//        cy.contains('.alert-danger', expectedMessage).should('be.visible');
//
//    }
//

//}

//export default new SignupPage