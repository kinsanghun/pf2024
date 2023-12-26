import Caption from "src/components/typography/Caption"
import Headline1 from "src/components/typography/Headline1"
import Text from "src/components/typography/Text"
import Title from "src/components/typography/Title"
import { useTheme } from "src/hooks/useTheme";

function Home() {
    const [theme, setTheme] = useTheme();
    const lorem = "Lorem ipsum"
    return (
        <>
        <button onClick={() => { setTheme() }}>change</button>
        <Title>{lorem}</Title>
        <Headline1>{lorem}</Headline1>
        <Text>{lorem}</Text>
        <Caption>{lorem}</Caption>
        </>
    )
}

export default Home;