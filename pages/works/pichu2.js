import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
   <Container>
      <Title>
        Gemastik <Badge>2020</Badge>
      </Title>
      <P>
      I once participated in a Gemastik competition held by Telkom and had a national class.
       In this competition, I and my team of 3 represent my organization and university to compete with other universities.
My team and I took part in a competition in the UI/UX field and my team created a Mobile App Design with the name Print Online


      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Competition</Meta>
          <span>UI/UX Designer</span>
        </ListItem>
        <ListItem>
          <Meta>Team</Meta>
          <span>PION</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview Project</Center>
      </Heading>


      <WorkImage src="/images/works/pion1.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/pion2.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/pion3.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
