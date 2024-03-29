const dynamicText = document.querySelector(".occupation");
const words =["Full-Stack Web Developer", "WordPress Developer", "Teacher", "Public Speaker"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentword = words[wordIndex];
    const currentchar = currentword.substring(0, charIndex);
    dynamicText.textContent = currentchar;
    dynamicText.classList.add("stopblinking");

    if(!isDeleting && charIndex < currentword.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stopblinking");
        wordIndex = !isDeleting ? (wordIndex + 1)%
        words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();