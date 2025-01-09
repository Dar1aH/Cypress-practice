class ContactsSection {
    elements = {
        contactsSocialMedia: () => cy.get('div.contacts_socials'),
        faceBookHyperLink: () => cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]'),
        telegramHyperLink: () => cy.get('a[href="https://t.me/ithillel_kyiv"]'),
        youTubeHyperLink: () => cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]'),
        instagramHyperLink: () => cy.get('a[href="https://www.instagram.com/hillel_itschool/"]'),
        linkedinHyperLink: () => cy.get('a[href="https://www.linkedin.com/school/ithillel/"]'),
        references: () => cy.get('div.col-md-6.align-items-md-end'),
        hillelWebsiteHyperLink: () => cy.get('a[href="https://ithillel.ua"]'),
        supportEmailHyperLink: () => cy.get('a[href="mailto:developer@ithillel.ua"]')
    }

    verifyFacebookIcon(){
        this.elements.contactsSocialMedia().within(() => {
            this.elements.faceBookHyperLink().should('exist')
        this.elements.faceBookHyperLink().find('.icon-facebook').should('exist')
        })
    }

    verifyTelegramIcon(){
        this.elements.contactsSocialMedia().within(() => {
            this.elements.telegramHyperLink().should('exist')
        this.elements.telegramHyperLink().find('.icon-telegram').should('exist')
        })
    }

    verifyYouTubeIcon(){
        this.elements.contactsSocialMedia().within(() => {
            this.elements.youTubeHyperLink().should('exist')
        this.elements.youTubeHyperLink().find('.icon-youtube').should('exist')
        })
    }

    verifyInstagramIcon(){
        this.elements.contactsSocialMedia().within(() => {
            this.elements.instagramHyperLink().should('exist')
        this.elements.instagramHyperLink().find('.icon-instagram').should('exist')
        })
    }

    verifyLinkedinIcon(){
        this.elements.contactsSocialMedia().within(() => {
            this.elements.linkedinHyperLink().should('exist')
        this.elements.linkedinHyperLink().find('.icon-linkedin').should('exist')
        })
    }

    verifyHillelWebsite(){
        this.elements.references().within(() =>{
            this.elements.hillelWebsiteHyperLink().should('exist').should('have.text', 'ithillel.ua')
        })

    }

    verifySupportEmail(){
        this.elements.references().within(() => {
            this.elements.supportEmailHyperLink().should('exist').should('have.text', 'support@ithillel.ua')
        })

    }
}
export default ContactsSection