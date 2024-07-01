import path from "path";
import fs from "fs-extra";

export default async function quickstart(answers: any) {
	const projectDir = path.join(process.cwd(), answers.projectName);
	const template = getTemplate(answers);
	if (template === null) throw new Error("Template not found");
	try {
		await fs.copy(path.join(process.cwd(), "\\src\\templates", template), projectDir, {
			overwrite: true,
		});
		console.log(
			`Project ${answers.projectName} created successfully at ${projectDir}`,
		);
	} catch (error) {
		console.error(`Error creating project ${answers.projectName}:`, error);
	}
}

const getTemplate = (answers: any) => {
	const { architecture, clientFramework, serverFramework, language } = answers;
	switch (architecture) {
		case "client":
			if (!clientFramework) return null;
			return `client/${clientFramework}-${language}`;

		case "server":
			if (!serverFramework) return null;
			return `server/${serverFramework}-${language}`;

		case "full-stack":
			if (!clientFramework || !serverFramework) return null;
			return `full-stack/${clientFramework}-${serverFramework}-${language}`;

		default:
			return null;
	}
};
