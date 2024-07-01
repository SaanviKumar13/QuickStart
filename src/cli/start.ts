import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
	{
		type: "list",
		name: "architecture",
		message: "What are you working on today?",
		choices: [
			{ name: "Client", value: "client" },
			{ name: "Server", value: "server" },
			{ name: "Full stack", value: "full-stack" },
		],
	},
];
export default async function start() {
	const answers = await inquirer.prompt(questions);
	if (answers.architecture === "client") {
		const clientFramework = await inquirer.prompt([
			{
				type: "list",
				name: "clientFramework",
				message: "Which client framework are you using?",
				choices: [
					{ name: "Next.js", value: "next-pages" },
					{ name: "Next.js App Router", value: "next-app" },
					{ name: "Remix", value: "remix" },
				],
			},
		]);
		answers.clientFramework = clientFramework.clientFramework;
	} else if (answers.architecture === "server") {
		const serverFramework = await inquirer.prompt([
			{
				type: "list",
				name: "serverFramework",
				message: "Which server framework are you using?",
				choices: [
					{ name: "Express", value: "express" },
					{ name: "Koa", value: "koa" },
					{ name: "NestJS", value: "nestjs" },
				],
			},
			{
				type: "list",
				name: "database",
				message: "Which database are you using?",
				choices: [
					{ name: "MongoDB", value: "mongodb" },
					{ name: "PostgreSQL", value: "postgres" },
					{ name: "MySQL", value: "mysql" },
				],
			},
		]);
		answers.serverFramework = serverFramework.serverFramework;
		answers.database = serverFramework.database;
	} else if (answers.architecture === "full-stack") {
		const fullStackChoices = await inquirer.prompt([
			{
				type: "list",
				name: "clientFramework",
				message: "Which client framework are you using?",
				choices: [
					{ name: "Next.js", value: "next-pages" },
					{ name: "Next.js App Router", value: "next-app" },
					{ name: "Remix", value: "remix" },
				],
			},
			{
				type: "list",
				name: "serverFramework",
				message: "Which server framework are you using?",
				choices: [
					{ name: "Express", value: "express" },
					{ name: "Koa", value: "koa" },
					{ name: "NestJS", value: "nestjs" },
				],
			},
			{
				type: "list",
				name: "database",
				message: "Which database are you using?",
				choices: [
					{ name: "MongoDB", value: "mongodb" },
					{ name: "PostgreSQL", value: "postgres" },
					{ name: "MySQL", value: "mysql" },
				],
			},
		]);
		answers.clientFramework = fullStackChoices.clientFramework;
		answers.serverFramework = fullStackChoices.serverFramework;
		answers.database = fullStackChoices.database;
	}
	const languageChoice = await inquirer.prompt([
		{
			type: "list",
			name: "language",
			message: "Would you like to use TypeScript or JavaScript?",
			choices: [
				{ name: "TypeScript", value: "typescript" },
				{ name: "JavaScript", value: "javascript" },
			],
		},
	]);
	answers.language = languageChoice.language;

	console.log(chalk.hex("#CA8787")("Your choice \n"));
	console.log(answers);
	console.log("\n");
	const confirm = await inquirer.prompt([
		{
			type: "list",
			name: "confirm",
			message: "Should we proceed creating this stack?",
			choices: [
				{ name: "Yes", value: "yes" },
				{ name: "No", value: "no" },
			],
		},
	]);

	if (confirm.confirm == "yes") {
		console.log(chalk.hex("#BACD92")("QuickStarting you project...."));
	} else {
		console.log(chalk.hex("#FEEFAD")("Restarting..."));
		await start();
	}
}
