import { VStack } from "@chakra-ui/react";
import AccordionItem from "./AccordionItem";
import { FAQ } from "./mocks";
import { useState } from "react";

export type AccordionProps = {
	data: FAQ[];
};

const Accordion = ({ data }: AccordionProps) => {
	const [currentOpen, setCurrentOpen] = useState<number | null>(0);
	
	return (
		<VStack backgroundColor='beige' height='100vh' pt='4rem'>
			{data.map((item, index) => (
				<AccordionItem
					key={index}
					selected={currentOpen}
					handleOpen={setCurrentOpen}
					text={item.text}
					title={item.title}
					counter={index}
				/>
			))}
		</VStack>
	);
};

export default Accordion;
