import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pinguin Karnivora">
    <Container>
      <Title>
        Pingin Karnivora Dev Team <Badge>2021</Badge>
      </Title>
      <P>
     Pinguin Karnivora is the name of our team at PT Agate international.
we are a team that works in the field of game developers,
 in this team there are 10 people and various roles,
  we also have a project game called GADEVA which we will launch in January 2022. 
  I work together with the team to complement each other&apos;s shortcomings 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Team Role</Meta>
          <span>Game Programmer</span>
        </ListItem>
        <ListItem>
          <Meta>Project Team</Meta>
          <span>GADEVA</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/gd1.png" alt="STYLY" />
      <WorkImage src="/images/works/gd2.png" alt="STYLY" />
      <WorkImage src="/images/works/gd3.png" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
