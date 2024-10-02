import type { BaseAIConfig } from 'baseai';

export const config: BaseAIConfig = {
	log: {
		isEnabled: false,
		logSensitiveData: false,
		pipe: true,
		'pipe.completion': false,
		'pipe.request': false,
		'pipe.response': false,
		tool: true,
		memory: false
	},
	memory: {
		useLocalEmbeddings: false
	},
	envFilePath: '.env'
};
