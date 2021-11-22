import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/st.jpg'
import thumbMyDeskSetup from '../public/images/contents/petani.png'
import thumb500PaidUsers from '../public/images/contents/udemy.jpg'
import thumbFinancialGoal from '../public/images/contents/py.jpg'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/blog-financial-goal.png'

const Posts = () => (
  <Layout title="Posts">
     <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Play Game With Dewa"
            thumbnail={thumbFishWorkflow}
            href="https://steamcommunity.com/id/dewasurya"
          />
          <GridItem
            title="My Favorite Website For Learn Programing"
            thumbnail={thumbMyDeskSetup}
            href="https://www.petanikode.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Free course provider website"
            thumbnail={thumb500PaidUsers}
            href="https://www.udemy.com/"
          />
          <GridItem
            title="Recommended channel for learning python"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/c/KelasTerbuka"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Recomended Channel for Learning UI/UX"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.youtube.com/c/DesignCodeTeam/videos"
          />
          <GridItem
            title="I learned programming from beginners here"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/c/Freecodecamp"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
