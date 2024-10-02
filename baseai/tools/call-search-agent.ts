import { ToolI, Pipe } from '@baseai/core';
import pipeAiSearchPipe from '../pipes/ai-search-pipe';

const pipe = new Pipe(pipeAiSearchPipe());

export async function call_search_agent({customerQuery}: {customerQuery: string}) {
	// Your tool logic here
	console.log(`customer query: ${customerQuery}`);
	const linuxSearchAgentResp = await pipe.run({
		messages: [{ role: 'user', content: customerQuery }],
	});

	return linuxSearchAgentResp.completion;
}

const callSearchAgentTool = (): ToolI => ({
	run: call_search_agent, // Name of the function to run
	type: 'function' as const,
	function: {
		name: `call_search_agent`,
		description: `Call this function for queries related to ubuntu 18, 20, 22 IT and system engineer support`,
		parameters: {
			type: 'object',
			properties: {
				customerQuery: {
					type: 'string',
					description:
						'The user query is related to supports topic in Linux, Ubuntu 18 to 22'
				}
			},
			required: ['customerQuery']
		}
	}
});

export default callSearchAgentTool;
