function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[process.argv.length-1]
}

function getNameFromEnv() {
    // const variableName=process.env.name="vignesh"
    // Write your code here
    return process.env.name
}

function getNameFromReadLine() {

    // Write your code here
    const readline=require("readline")
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    rl.question("",(name)=>{
        console.log(name);
        rl.close()}
        
    )
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}