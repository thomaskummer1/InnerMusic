import {
    Button,
    Grid,
    GridItem,
  } from '@chakra-ui/react';
  


const Navbar = () => {
    return (
        <Grid templateColumns='repeat(10, 1fr)' h = '5%' gap={1} paddingTop='1%'>
            <GridItem/>
            <GridItem w='100%' textColor='#28245e' fontSize={30} >Inner Music</GridItem>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem/>
            <GridItem> <Button>Home</Button></GridItem>
            <GridItem/>
            <GridItem/>
        </Grid>
    )
    // return (  
    //     <nav className="navbar">
    //         <h1>Inner Music</h1>
    //         <div className="links">
    //             <Button variant='ghost' colorScheme='blue'>Home</Button>
    //             <a href="/create" style={{
    //                 color: 'white',
    //                 backgroundColor: '#28245e',
    //                 borderRadius: '8px'
    //             }}>Sign In</a>
    //         </div>
    //     </nav>
    // );
}
 
export default Navbar;