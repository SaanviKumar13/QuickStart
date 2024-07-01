#!/usr/bin/env node
import start from "./cli/start.js";
import welcome from "./cli/welcome.js";

function main(){
    welcome();
    start();
}
main(); 