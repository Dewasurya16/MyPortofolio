import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
     <Container>
      <Title>
        Endles Runner 2D <Badge>2021</Badge>
      </Title>
      <P>
      A 2D-based game that I worked on for about 5 day&apos;s 
      and this game is quite exciting because players are given
      a challenge to avoid enemies so they don't die of course
      players can also get scores during the game
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Dewasurya16/2d_endles-Runner.git/">
              https://github.com/Dewasurya16/2d_endles-Runner.git{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview Project</Center>
      </Heading>

      <WorkImage
        src="/images/works/enles.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/enles1.png" alt="walknote" />
      <WorkImage src="/images/works/enles2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
