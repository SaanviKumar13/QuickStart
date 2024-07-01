import chalk from "chalk";

export default function welcome() {
	console.log(
		chalk.hex("#F3D0D7")(`
  ____        _       __        __              __ 
 / __ \__ __ (_)____ / /__ ___ / /_ ___ _ ____ / /_
/ /_/ // // // // __//  '_/(_-</ __// _ // __// __/
\___\_\\_,_//_/ \__//_/\_\/___/\__/ \_,_//_/   \__/ 
                                                        `),
	);
	console.log(chalk.hex("#F3D0D7")(`Welcome to QuickStart!`));
	console.log(
		chalk.hex("#F3D0D7")(
			`It bootstraps your projects, so that you can focus on what's really important.`,
		),
	);
	console.log(chalk.hex("#BED7DC")(`Made with 💙 by Saanvi`));
}
