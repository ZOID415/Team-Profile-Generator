

    const generateManager = manager => {
        return `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${manager.getName()}</h1>
            <h2 class="text-lg text-slate-300">ID: ${manager.getId()}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${manager.getRole()}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></div>
            <div class="ml-3 mb-3">Office: ${manager.getOfficeNumber()}</div>
            </article>`;}
    
    const generateEngineer = engineer => {
        return `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${engineer.getName()}</h1>
            <h2 class="text-lg text-slate-300">ID: ${engineer.getId()}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${engineer.getRole()}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></div>
            <div class="ml-3 mb-3">Github: ${engineer.getGithub()}</div>
            </article>`;}

            const generateIntern = intern => {
        return `<!--Card-->
            <article class="container shadow-md bg-blue-100 rounded-lg text-center">
            <div class="bg-blue-900 rounded-t-lg py-2 capitalize">
            <h1 class="text-3xl text-white font-semibold">${manager.getName()}</h1>
            <h2 class="text-lg text-slate-300">ID: ${intID}</h2>
            </div>
            <div class="ml-3 m-2 text-xl font-semibold">${role}</div>
            <div class="ml-3 mb-2 hover:text-blue-700 hover:font-semibold"><a href = "mailto: ${intEmail}">${intEmail}</a></div>
            <div class="ml-3 mb-3">Education: ${intSchool}</div>
            </article>`;}

           

module.exports = {generateManager, generateIntern, generateEngineer};
