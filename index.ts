import 'dotenv/config';
import { Pipe } from '@baseai/core';
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import pipeItLinuxSupportAgent from './baseai/pipes/it-linux-support-agent';

const pipe = new Pipe(pipeItLinuxSupportAgent());

async function main() {
    console.log(chalk.green('Welcome to the IT Linux Support Agent CLI!'));
    console.log(chalk.yellow('Type "exit" to quit the application.\n'));

    while (true) {
        const { userMsg } = await inquirer.prompt([
            {
                type: 'input',
                name: 'userMsg',
                message: chalk.blue('Enter your query (or type "exit" to quit):'),
            },
        ]);

        if (userMsg.toLowerCase() === 'exit') {
            console.log(chalk.green('Goodbye!'));
            break;
        }

        const spinner = ora('Processing your request...').start();

        try {
            const { completion: linuxAgentResp } = await pipe.run({
                messages: [{ role: 'user', content: userMsg }],
            });

            spinner.stop();
            console.log(chalk.cyan('Agent:'), linuxAgentResp);
        } catch (error) {
            spinner.stop();
            console.error(chalk.red('Error processing your request:'), error);
        }
    }
}

main();
