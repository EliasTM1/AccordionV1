import { Box } from "@chakra-ui/react";
import Accordion from "./Accordion";
import { faqsMocksData } from "./mocks";

function App() {
	return (
		<Box>
			<Accordion data={faqsMocksData}></Accordion>
		</Box>
	);
}

export default App;
