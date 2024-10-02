import { ToolI } from '@baseai/core';

export async function call_script_agent() {
	// Your tool logic here
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
