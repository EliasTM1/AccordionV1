import { VStack } from "@chakra-ui/react";
import AccordionItem from "./AccordionItem";
import { FAQ } from "./mocks";

export type AccordionProps = {
	data: FAQ[];
};

const Accordion = ({ data }: AccordionProps) => {
	console.log(data);
	return (
		<VStack backgroundColor="beige">
			{data.map((item, index) => (
				<AccordionItem text={item.text} title={item.title} counter={index + 1}/>
			))}
		</VStack>
	);
};

export default Accordion;
