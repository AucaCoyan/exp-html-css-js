type ParseMap = {
	[P in keyof MessageTypeToType]: (msg: Buffer, offset: number) => MessageTypeToType[P];
}

const parseMap: ParseMap = {
	[MessageType.WhoAmI]: whoAmI
}
type MessageTypeToType = any;
const MessageType = {
	WhoAmI: '1'
} as const;
type ServerMessage = any;
type WhoAmI = {
	type: MessageType,
	value: number
};


export default function parse(msg: Buffer, offset: number, maxByte: number): [ServerMessage, number] | undefined {
	if (isJson()) {
		const len = msg.readUint8(0);
		if (len <= maxByte - 1) {
			return [
				JSON.parse(msg.subarray(1, 1 + len).toString()),
				len + 1
			]
		}

		return undefined
	}

	const len = msg.readUint8(offset);
	if (len > maxByte - offset - 1) {
		return undefined
	}

	const key: MessageType = msg.readUint8(offset + 4);
	const fn = parseMap[key];

	return [
		{
			seqNu: msg.readUint16BE(offset + 1),
			version: msg.readUint8(offset + 3),
			msg: fn(msg, offset + 4),
		},
		len + 1
	]
}

function whoAmI(msg: Buffer, offset: number): WhoAmI {
	return {
		type: MessageType.WhoAmI,
		value: msg.readUint8(offset),

	}
