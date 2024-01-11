import { Box, HStack, Text, Heading } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type ItemProps = {
	title: string;
	text: string;
	counter: number;
	// handleOpen: (count: number) => void;
	handleOpen: (count: number) => void;
	selected: number | null;
};

const AccordionItem = ({ text, title, counter, handleOpen, selected }: ItemProps) => {
	const shouldExpand: boolean = counter === selected


	function toggleExpand(number : number) {
		handleOpen(() => shouldExpand ? null : number);
	}

	return (
		<Box
			width='70%'
			border='1px solid gray'
			borderTop={shouldExpand ? "5px solid green" : ""}
			padding='2rem'
			borderRadius='10px'
            backgroundColor="white"
		>
			<HStack>
				<Heading>
					{counter}. {title}
				</Heading>
				<Box cursor="pointer">
					{!shouldExpand ? (
						<AddIcon onClick={() => toggleExpand(counter)} />
					) : (
						<MinusIcon onClick={() => toggleExpand(counter)} />
					)}
				</Box>
			</HStack>
			{shouldExpand ? (
				<Box>
					<Text>{text}</Text>
				</Box>
			) : (
				<></>
			)}
		</Box>
	);
};

export default AccordionItem;
