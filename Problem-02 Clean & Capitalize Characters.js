function onlyCharacter(str) {
    //todo ইনপুট চেক করবো
    if (typeof str !== 'string') {
        return "Invalid";
    }

    //todo স্পেস বাদ দিয়ে বড় হাতের অক্ষরে রূপান্তর
    let result = str.replaceAll(" ", "").toUpperCase();

    //todo রিটার্ন করবো
    return result;
}


//todo Example Test:
console.log(onlyCharacter("  h e llo wor   ld"));        //* HELLOWORLD
console.log(onlyCharacter("Cy   bar- At  tac k  "));    //* CYBAR-ATTACK
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  ")); //* HACKME1@RU.CN
console.log(onlyCharacter("Serv er : : Do wn"));      //* SERVER::DOWN
console.log(onlyCharacter(["hack", "me"]));          //* Invalid
console.log(onlyCharacter(true));                   //* Invalid