import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
   <Container>
      <Title>
        Hangman<Badge>2021</Badge>
      </Title>
      <P>
      hangman that I made is based on cmd game using full python.
    this game does not require assets, it only requires data that has 
    been inputted, this project I made with a period of 2 hours and a
    lot of tutorials on youtube I use Indonesian in this project.


      </P>
      <P>
      things you need to prepare to make a my hangman game is not difficult, just need
      </P>
      <UnorderedList my={4}>
        <ListItem>Mastery of Python and logic</ListItem>
        <ListItem>Data list and Code Editor </ListItem>
        <ListItem>Coffe</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/linux</span>
        </ListItem>
        <ListItem>
          <Meta>Langguages</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Dewasurya16/Hangman.git">
          https://github.com/Dewasurya16/Hangman.git <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hangman.png" alt="menkiki" />
      <WorkImage src="/images/works/hangman2.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
