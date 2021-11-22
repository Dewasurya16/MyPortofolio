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
  <Layout title="amembo">
    <Container>
      <Title>
        Kecerdasan Digital <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
      I followed class Kecerdasan Digital which was organized by Gajah Mada University and Huawei. Since joining this program I have gained more knowledge about Artical Intelligence which has made me understand more about AI and smart systems.
in this class I was taught directly by experts from Huawei whose knowledge is really great and expert
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Learned Class</Meta>
          <span>Ai With Solution</span>
        </ListItem>
        <ListItem>
          <Meta>Statuse</Meta>
          <span>Finished</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kd1.png" alt="amembo" />
      <WorkImage src="/images/works/kd3.png" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
