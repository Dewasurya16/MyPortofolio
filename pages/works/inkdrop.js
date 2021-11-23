import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Angry Birds <Badge>2021</Badge>
      </Title>
      <P>
      My game project that I&apos; ve been working on at PT Agate International.
  I did this project in approximately 1 week with several assets that have been provided by the company.
  the most difficult part of this project is the programming part which takes a long time because of the logic.


      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Dewasurya16/Angry-birds.git">
          https://github.com/Dewasurya16/Angry-birds.git<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C#</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bird.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
