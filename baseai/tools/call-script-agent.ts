import { ToolI, Pipe } from '@baseai/core';
import  pipeLinuxScriptAgent  from '../pipes/linux-script-agent'

const pipe = new Pipe(pipeLinuxScriptAgent());

export async function call_script_agent({customerQuery}: {customerQuery: string}) {
	// Your tool logic here
	console.log(`customer query: ${customerQuery}`);
	const linuxScriptAgentResp = await pipe.run({
		messages: [{ role: 'user', content: customerQuery }],
	});

	return linuxScriptAgentResp.completion;
}

const callScriptAgentTool = (): ToolI => ({
	run: call_script_agent, // Name of the function to run
	type: 'function' as const,
	function: {
		name: `call_script_agent`,
		description: `Call this function for queries related bash, python and javascript`,
		parameters: {
			type: 'object',
			properties: {
				customerQuery: {
					type: 'string',
					description:
						'The user query related to related bash, python and javascript'
				}
			},
			required: ['customerQuery']
		}
	}
});

export default callScriptAgentTool;
