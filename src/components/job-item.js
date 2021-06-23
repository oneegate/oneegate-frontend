/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Text } from "theme-ui";
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

export default function JobItem({item, handleDelete, client}) {
  const history = useHistory()
  
  return (
    <section>
      {client ? (
        <Box sx={styles.jobItem}>
        <Text as='p' sx={{fontSize: ['0.8rem', '1.2rem'], color: 'black', textTransform: 'uppercase', fontWeight: '900'}}>{item.title}</Text>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
          <Text as='p' sx={{color: 'black', marginRight: '0.6rem', fontSize: '0.8rem'}}>{item.location}</Text>
          <Link to={`/careers/${item._id}`} sx={{textDecoration: 'none', color: 'black', fontSize: '0.8rem'}}>More Details <BsArrowRight /></Link>
        </Box>
      </Box>
      ) : (
        <Box sx={styles.jobItem}>
        <Text as='p' sx={{fontSize: '1.2rem', color: 'black', textTransform: 'uppercase', fontWeight: '900'}} onClick={() => history.push(`/careers/${item._id}`)}>{item.title}</Text>
        <AiFillDelete color='red' size={21} onClick={() => handleDelete(item._id)} sx={{cursor: 'pointer'}} />
      </Box>
      )}
    </section>
  );
}

const styles = {
    jobItem: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: ['0.7rem', '2rem'],
        borderBottom: '1px solid rgba(0,0,0,.13)'
    }
}