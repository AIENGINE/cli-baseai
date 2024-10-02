import 'dotenv/config';

import { Pipe, streamText, getRunner, getTextContent } from '@baseai/core';
import  pipeItLinuxSupportAgent from './baseai/pipes/it-linux-support-agent';

const pipe = new Pipe(pipeItLinuxSupportAgent());

// const userMsg = 'How to check particular process cpu usage using command line?';
const userMsg = 'How to update snapd in ubunut20?';


async function main() {

	const {stream} = await pipe.run({
		messages: [{ role: 'user', content: userMsg }],
		stream: true
	
	});
	const runner = getRunner(stream);

	for await (const chunk of runner) {
		// const textPart = chunk.choices[0]?.delta?.content || '';
		// Or use the utility function
		const textPart = getTextContent(chunk);

		// Print to the console without new line
		process.stdout.write(textPart);
	}

	// const linuxAgentResp = await pipe.run({
	// 	messages: [{ role: 'user', content: userMsg }],
	// 	stream: true
	
	// });

	// console.log(linuxAgentResp);

	// const runner = getRunner(stream);

	// runner.on('connect', () => {
	// 	console.log('Stream started.\n');
	// });

	// runner.on('content', content => {
	// 	process.stdout.write(content);
	// });

	// runner.on('end', () => {
	// 	console.log('\nStream ended.');
	// });

	// runner.on('error', error => {
	// 	console.error('Error:', error);
	// });

	
}

main();