/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Text, Heading, Button } from "theme-ui";
import CoreFeatureBg from '../assets/core-features-bg.jpg'

const data = {
  subTitle: "Hospitality Consultancy",
  // title: "Smart Jackpots that you may love this anytime & anywhere",
  description: `<ul style='list-style-type: none'>
    <li>
      Project Management:
      <ul style='list-style-type: none'>
        <li>Preparation of Pre-Opening Budgets</li>
        <li>Sales and Marketing Plan</li>
        <li>Restaurant Advisory</li>
        <li>Development of Policies and Procedures</li>
        <li>Operational Audits and Evaluation</li>
        <li>Room Division Consultancy</li>
        <li>Mystery Guest Service</li>
      </ul>
    </li>
    <li>
      F&B Concept Planning and Development:
      <ul style='list-style-type: none'>
        <li>Food and Beverage Consultancy</li>
        <li>Site Investigations</li>
        <li>Master Planning</li>
        <li>Design Concepts</li>
      </ul>
    </li>
    <li>
      Training:
      <ul style='list-style-type: none'>
        <li>Developing Programs</li>
        <li>Delivering Training to all Hotel Departments</li>
      </ul>
    </li>
  </ul>`,
  btnName: "Talk To Us",
  btnURL: "/contact",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature"}}>
      <Box sx={styles.coreFeature}>
        <Container sx={{display: ['block', 'flex']}}>
        <div sx={{flex: '1', alignSelf: ['unset', 'center']}}>
          <Heading sx={{fontSize: '2rem', marginTop: '2rem'}} color='#fff'>Hospitality Consultancy</Heading>
        </div>
        <div sx={styles.coreFeatureRight}>
        <Text as='p' dangerouslySetInnerHTML={{__html: data.description}}></Text>
        </div>
        </Container>
        <div sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <Button variant='primary' sx={{marginBottom: '2rem'}}>Talk to Us</Button>
        </div>
      </Box>
    </section>
  );
}

const styles = {
  coreFeature: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${CoreFeatureBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
}