import 'dotenv/config';

import { Pipe, streamText, getRunner, getTextContent } from '@baseai/core';
import  pipeItLinuxSupportAgent from './baseai/pipes/it-linux-support-agent';

const pipe = new Pipe(pipeItLinuxSupportAgent());

// const userMsg = 'How to check particular process cpu usage using command line?';
const userMsg = 'How to update snapd in ubunut20?';
// const userMsg = 'Create a bash script to watch cpu freq with 1 second interval';
const userMsg2 = 'What ROS2 version is compatible with Ubuntu 24?';


async function main() {


	const {completion: linuxAgentResp, threadId} = await pipe.run({
		messages: [{ role: 'user', content: userMsg }],

	});
	console.log(`threadid: ${threadId}\n`);
	console.log(linuxAgentResp);


	const {completion: linuxAgentResp2 } = await pipe.run({
		messages: [{ role: 'user', content: userMsg2 }],
		threadId: threadId

	});
	console.log(`threadid: ${threadId}\n`);
	console.log(linuxAgentResp2);



	
}

main();