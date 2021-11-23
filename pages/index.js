import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoLogoLinkedin
} from 'react-icons/io5'
import thumbYouTube from '../public/images/Youtube.png'
import thumbInkdrop from '../public/images/G.jpg'

const Home = () => (
  <Layout>
    <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, Im a Developer based in Temanggung !
            </Box>
            
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dewa Sinar Surya
                        </Heading>
                        <p> Freelancer  ( Developer / UI UX Designer) </p>
            </Box>
            <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align="center">
                <Image borderColor="whiteAlpha.800"
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/kk.jpg"
                alt="Profile Image"/>
            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph> 
                 Dewa is an Informatics Engineering student who is currently pursuing an undergraduate degree at Dian Nuswantoro University.
                 I like to seek experiences to improve my soft and hard skills both from inside and outside campus.
                 I also easily mingle with other people, and like to make friends and relationships and build close relationships with them.
                 I also like to play games and travel Using a motorbike to get around places I ve never been to.
                    <NextLink href="/works/inkdrop">
                        <Link> lets go </Link>
                        </NextLink>
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon = {<ChevronRightIcon/>} colorScheme="teal">
                            My Portofolio
                            </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Magelang Central Java
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Undergraduate Informatics Engineering
                    At Dian Nuswantoro University
                </BioSection>
                <BioSection>
                    <BioYear>2019 - 2021</BioYear>
                    Admin Social Media IKT (info kajian Temanggung)
                </BioSection>
                <BioSection>
                    <BioYear>2020 - Now</BioYear>
                    Member of Programming and Publication Division DOSCOM  
                    (Dinus Open Source Comunity)
                </BioSection>
                <BioSection> 
                    <BioYear>2021 - 2022</BioYear>
                    Kampus Merdeka Participants Study Independent
                    Game developer At PT AGATE INTERNATIONAL
                </BioSection>
                <BioSection>
                  <BioYear>2020 - Now</BioYear>
                  Freelancer UI/UX Designer and Technician assemble Computer
                </BioSection>
            </Section>

        
            <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Hobby 
                </Heading>
                <Paragraph>
                Music, Anime, {' '}
                    <Link href="https://steamcommunity.com/id/dewasurya">
                        Game
                    </Link>
                    , MotorBike, Programming,{' '}
                    <Link href="https://www.figma.com/files/user/818155319808154719?fuid=818155319808154719">
                    Design UI/UX
                    </Link>
                , Assemble Computer, Machine Learning
                </Paragraph>
            </Section>
            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Dewasurya16" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @DewaSurya16
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:dewasinar16@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGoogle} />}
              >
                dewasinar16@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          <Link href="https://wa.me/6281328940650" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoWhatsapp} />}
              >
                +6281328940650
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/dewasinarsurya/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                dewasinarsurya
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/dewa-sinar-surya-1709951ab/?originalSubdomain=id" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                Dewa Sinar Surya
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCUg34o2g7VFQrNgymCPMlXA/featured"
            title="Dewa Sinar Surya"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.figma.com/files/user/818155319808154719?fuid=818155319808154719"
            title="Figma"
            thumbnail={thumbInkdrop}
          >
            My Figma Project
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
        </Container>
  </Layout>
)

export default Home
