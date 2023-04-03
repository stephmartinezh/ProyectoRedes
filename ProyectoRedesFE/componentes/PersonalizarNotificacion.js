import {
    Text,
    Button,
    ScrollView,
    VStack,
    HStack,
    IconButton,
    List,
    Box,
    TextArea,
    Card,
    TextField,
    Input,
    Heading
} from 'native-base';
import AppBar from './AppBar';

const PersonalizarNots = () => {
    return (
        <Box alignItems="center" marginTop={80}>
            <AppBar />
            <Heading></Heading>
            <Input size="2x1" variant="rounded" mx="3" placeholder="Input" w="100%" />
            <Heading></Heading>
            <Button size="lg" p="4" bg="blue.800" rounded="xl"
                _text={{
                    pl: 1,
                    pr: 1,
                }}>
                Ingresar nuevo mensaje
            </Button>
        </Box>
    );



}

export default PersonalizarNots;