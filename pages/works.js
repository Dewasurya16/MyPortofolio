import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/Angry.jpg'
import thumbWalknote from '../public/images/works/match.png'
import thumbFourPainters from '../public/images/works/endles.png'
import thumbMenkiki from '../public/images/works/hangman.png'
import thumbModeTokyo from '../public/images/works/doscom.png'
import thumbStyly from '../public/images/works/gadeva.png'
import thumbPichu2 from '../public/images/works/gemnastik.png'
import thumbFreeDBTagger from '../public/images/works/ikt.png'
import thumbAmembo from '../public/images/works/k2.png'

const Works = () => (
  <Layout title="Works">
     <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Project
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Angry Birds" thumbnail={thumbInkdrop}>
                    The game that was liked by many young people at that time


                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                    id="walknote"
                    title="MatchTree"
                    thumbnail={thumbWalknote}
                    >
                        A fun puzzle game that anyone can play
                    </WorkGridItem>
                </Section>
            <Section delay={0.1}>
            <WorkGridItem
                id="fourpainters"
                title="Endles Runner 2D"
                thumbnail={thumbFourPainters}
          >
            Game to avoid obstacles and challenges
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Hangman">
          A challenging guessing game to answer correctly so as not to die
          </WorkGridItem>
        </Section>
            </SimpleGrid>

        <Section delay={0.2}>
            <Divider my={6}/>

        <Heading as="h3" fontSize={20} mb={4}>
          Activity
        </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Doscom"
          >
           Organizations engaged in the field of open source in Semarang
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Pinguin Karnivora">
          Independent Game Study Development Project Team
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Experience
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="GEMASTIK 2020">
          National Technology Competition held by Telkom and Kominfo
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="IKT"
          > Islamic community available in various districts
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Kceredasan Digital">
          AI class developed by Gajah Mada University  in collaboration with Kominfo and Huawei
          </WorkGridItem>
        </Section>
      </SimpleGrid>

        </Container>

  </Layout>
)

export default Works
