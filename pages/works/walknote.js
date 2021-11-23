import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Matchtree">
      <Container>
      <Title>
        MatchTree <Badge>2021</Badge>
      </Title>
      <P>
      A puzzle-based game project that I worked on while studying independently.
The excitement of this game is in the effect, that occurs when we manage to 
combine 3 of the same color. 


      </P>
      <P>
      The challenge that makes this game worth playing 
is that we have to find 3 of the same color and get as many points as possible to win.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Dewasurya16/MatchTree.git/">
          https://github.com/Dewasurya16/MatchTree.git{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languanges</Meta>
          <span>C#</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview Project</Center>
      </Heading>


      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/m2.png" alt="walknote" />
        <WorkImage src="/images/works/m3.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/m1.png" alt="walknote" />
    
    </Container>
  </Layout>
)

export default Work
