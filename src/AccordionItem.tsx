import { Box, HStack, Text, Heading } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

type ItemProps = {
	title: string;
	text: string;
	counter: number;
};

const AccordionItem = ({ text, title, counter }: ItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleExpand() {
		setIsOpen((previousState) => !previousState);
	}

	return (
		<Box
			width='70%'
			border='1px solid gray'
			borderTop={isOpen ? "5px solid green" : ""}
			padding='2rem'
			borderRadius='10px'
            backgroundColor="white"
		>
			<HStack>
				<Heading>
					{counter}. {title}
				</Heading>
				<Box cursor="pointer">
					{!isOpen ? (
						<AddIcon onClick={toggleExpand} />
					) : (
						<MinusIcon onClick={toggleExpand} />
					)}
				</Box>
			</HStack>
			{isOpen ? (
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
