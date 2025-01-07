import HomeSection from "../../page-objects/pages/HomeSection";
import ContactsSection from "../../page-objects/pages/ContactsSection";

describe('UI elements in header and footer', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify the buttons in the header', () => {
        const homeSection = new HomeSection()
        homeSection.verifyHomeBtn()
        homeSection.verifyAboutBtn()
        homeSection.verifyContactsBtn()
        homeSection.verifyGuestLogInBtn()
        homeSection.verifySignInBtn()
        homeSection.verifySignUpBtn()
    })

    it('Verify the buttons under Contacts', () => {
        const contactsSection = new ContactsSection
        contactsSection.verifyFacebookIcon()
        contactsSection.verifyTelegramIcon()
        contactsSection.verifyYouTubeIcon()
        contactsSection.verifyInstagramIcon()
        contactsSection.verifyLinkedinIcon()

      })
      

    it('Verify the references in the footer', () => {
        const contactsSection = new ContactsSection
        contactsSection.verifyHillelWebsite()
        contactsSection.verifySupportEmail()
    })

})

