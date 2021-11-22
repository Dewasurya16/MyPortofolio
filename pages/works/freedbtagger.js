import {
  Container,
  Badge,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
   <Container>
      <Title>
        IKT (Info Kajian Temanggung) <Badge>2019-2020</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
     
      <P>
      kt is a Muslim community in Temanggung and based in Yogyakarta, 
      in every district there are branches. This community is tasked with disseminating study information to the public so that people know where the Islamic religious studies are in Temanggung in this community,
       I get a lot of religious knowledge and make many acquaintances
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Position</Meta>
          <span>Admin Social Media</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/km.jpg" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work

