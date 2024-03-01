/* Dovednosti bod 1.

const htmlDovednost = Number(prompt("Jaké je tvá znalost HTML na škále 0 - 100?"))
const cssDovednost = Number(prompt("Jaké je tvá znalost CSS na škále 0 - 100?"))
const jsDovednost = Number(prompt("Jaké je tvá znalost JavaScriptu na škále 0 - 100?"))

const htmlElement = document.body.querySelector("#skill1 .skill__value")
htmlElement.textContent = `${htmlDovednost} / 100`
const htmlStylElement = document.body.querySelector("#skill1 .skill__progress")
htmlStylElement.style.width = `${htmlDovednost}%`

const cssElement = document.body.querySelector("#skill2 .skill__value")
cssElement.textContent = `${cssDovednost} / 100`
const cssStylElement = document.body.querySelector("#skill2 .skill__progress")
cssStylElement.style.width = `${cssDovednost}%`

const jsElement = document.body.querySelector("#skill3 .skill__value")
jsElement.textContent = `${jsDovednost} / 100`
const jsStylElement = document.body.querySelector("#skill3 .skill__progress")
jsStylElement.style.width = `${jsDovednost}%`

*/

//Dovednosti bod 2.

const updateSkill = (idElementu,urovenDovednosti) => {
    if (urovenDovednosti >= 0 && urovenDovednosti <= 100) {
        const urovenElement = document.body.querySelector(`#skill${idElementu} .skill__value`)
        urovenElement.textContent = `${urovenDovednosti} / 100`
        const urovenStylElement = document.body.querySelector(`#skill${idElementu} .skill__progress`)
        urovenStylElement.style.width = `${urovenDovednosti}%`
        return urovenDovednosti
    }
    else return false
}

console.log(updateSkill(1,90))
console.log(updateSkill(2,80))
console.log(updateSkill(3,60))
