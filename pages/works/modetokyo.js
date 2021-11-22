import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        Doscom(Dinus Open Source) <Badge>2020-2022</Badge>
      </Title>
      <P>Organizations at Dian Nuswantoro University that are engaged in Open Source
      here I learn a lot about what open source is and since the time I joined I used Open Source Software to prevent Piracy
      </P>
      <P>
        Here I learned how to manage an organization and how to be responsible. 
        at doscom I got a lot of experience such as being a committee, presenter, 
        and I also made a lot of new friend &apos;s. I used to be a speaker to teach students 
        to learn python in a Pyshare event held by Doscom.
         and I was a Speaker in the Game Dev section of the Doscom Sharing Time Event
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Position </Meta>
          <span>Member of the Programming and Documentation Publication Division</span>
        </ListItem>
        <ListItem>
          <Meta>Presenter"&apos; Record</Meta>
          <Link href="https://www.youtube.com/watch?v=bACTvlaQ2_w">
          My recording when I was a GAME DEV speaker at Doscom Sharing Time{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/oke.jpg" alt="mode.tokyo" />
        <WorkImage src="/images/works/pyshare.jpg" alt="mode.tokyo" />
        <WorkImage src="/images/works/botcamp.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
