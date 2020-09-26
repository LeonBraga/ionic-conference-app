/* For more comprehensive examples of custom commands please read more here: https://on.cypress.io/custom-commands */
import { Storage } from '@ionic/storage';

const storage = new Storage;

Cypress.Commands.add('habilitaTutorialEmStorage', () => {
    cy.visit('/', {
        onBeforeLoad() {
            storage.set('ion_did_tutorial', false)
        }
    })
})

Cypress.Commands.add('desabilitaTutorialEmStorage', () => {
    cy.visit('/', {
        onBeforeLoad() {
            storage.set('ion_did_tutorial', true)
        }
    })
})

Cypress.Commands.add('deslizaParaEsquerda', () => {
    cy.get('.swiper-slide-active')
        .trigger('mousedown', { position: "right" })
        .trigger('mousemove', { clientX: 100, clientY: 275 })
        .trigger('mouseup', { force: true })
})

Cypress.Commands.add('deslizaParaDireita', () => {
    cy.get('.swiper-slide-active')
        .trigger('mousedown', { position: "left" })
        .trigger('mousemove', { clientX: 100, clientY: 275 })
        .trigger('mouseup', { force: true })
})