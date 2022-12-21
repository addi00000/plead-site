import commands from '../commands.json';

export const load = ({ params }) => {
	const fetchCommand = async (command) => {
		for (const category in commands) {
			for (const cmd in commands[category]) {
				if (cmd === command) {
					return commands[category][cmd];
				}
			}
		}

		return null;
	};

	return {
		name: params.command,
		command: fetchCommand(params.command)
	};
};
