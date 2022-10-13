<<<<<<< Updated upstream
import { Box, Typography , Grid, Button } from "@mui/material";
=======
import { Box, Typography, Button } from "@mui/material";
>>>>>>> Stashed changes
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getDetailProduct } from "../redux/actions";
import { createTheme } from "@mui/material";
<<<<<<< Updated upstream
import { ThemeProvider } from '@emotion/react';



=======
import { addToCart } from "../redux/actions/cart-actions";
import { styled } from '@mui/material/styles';
import Reviews from "./Reviews";




const StyledBox = styled(Box)(({ }) => ({
  margin:"40px",
  padding:"40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:"center",
  flexDirection:"row",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
}));

const StyledBoxPrice = styled(Box)(({ }) => ({
  marginTop:"10px",
  paddingBottom:"5px",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"center",
  boxShadow: "0px 1px 2px 0px rgba(151, 154, 141, 1)",
  
}));



export default function Detail() {
  const { i } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getDetailProduct(i));
  }, [dispatch, i])
  let detailProduct = useSelector(state => state.detailProductReducer.detailProduct)
  // console.log(detailProduct)
  // console.log(i)
>>>>>>> Stashed changes

export default function Detail () {
    const { i } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetailProduct(i));
    },[dispatch,i])
    let detailProduct = useSelector(state =>state.detailProductReducer.detailProduct)
    console.log(detailProduct)
    console.log(i)

<<<<<<< Updated upstream
    const theme = createTheme({
        palette: {
          primary: {
            // aqui el color primario un gris suave para que el logo se pueda ver.
            main: "#cfcfcf",
            light:"#cfcfcf",
            dark:"#707070"
          },
          secondary: {
            // de secundario un azul suave para evitar que sea muy chocante 
            main: '#4f83cc',
            light:"#4f83cc",
            dark:"#002f6c"
          },
        },
        //aqui aumente un poco el tamaño de todo
        typography : {
          fontSize: 12
        }
      });




    return (
        <ThemeProvider theme={theme}>
        <Box bgcolor={"white"} mb={10} flexGrow={1}>
            <Box 
            borderBottom={"solid 1px"} 
            bgcolor={"whitesmoke"} 
            borderColor={theme.palette.primary.main} 
            width={"100%"} 
            height={80}
            display="flex"
            alignItems={"center"}
            justifyContent={"flex-end"}
            >
            <Box 
            display="flex"
            justifyContent={"flex-end"}
            alignItems={"center"}
            width="50%"
            marginRight={15}>
            <Typography variant={"h5"} sx={{marginRight:3}}>
                Price
=======
  function handleClickButton(e) {
    dispatch(addToCart(i));
    navigate("/shopping-cart")
  }

  return (
    <>
      <StyledBoxPrice>
            <Box  display={"flex"} alignItems={"center"} justifyContent={"flex-end"} mr={4} >
            <Typography variant={"h5"}  sx={{ marginRight: 3 }}>
              Precio
>>>>>>> Stashed changes
            </Typography>
            <Typography variant={"h5"} sx={{marginRight:5}}>
                {` $ ${detailProduct?.salePrice}`}
            </Typography>
<<<<<<< Updated upstream
             <Button 
            variant="contained"
            size="large"
             >Add to Cart</Button>
            </Box>
            </Box>
         <Grid container spacing={0} justifyContent="center" alignItems="center" direction="row"  wrap="wrap-reverse">
           <Grid item xs="10" sm="auto" xl="3" md="4"  >
           <Box 
            component="img"
            src={detailProduct.images && detailProduct.images[0].url}
            sx={
           { maxHeight:300,
            maxWidth:300,
            padding:5}}>
          </Box> 
          </Grid>  
          <Grid item xs="10" sm="auto" xl="3" md="4" >
           <Box>
            <Typography variant="h6" component="p" marginTop={5}>
                 {`categoria : ${detailProduct.name && detailProduct.category.name}`}
            </Typography> 
           <Typography variant="h4" component="p"  marginTop={5}>
                 {detailProduct?.name}
            </Typography>
            <Typography variant="h6" component="p"  marginTop={4}>
                 {`${detailProduct?.description}`}
            </Typography>  

          </Box>
          </Grid>
          </Grid>     
          </Box>
          </ThemeProvider>  
        
    )
=======
            <Button
              variant="contained"
              size="large"
              onClick={handleClickButton}
            >Agregar al carrito</Button>
            </Box>
      </StyledBoxPrice>
          
        <StyledBox >

          <Box width={"30%"}
              sx={{display:{
                xs:"none",
                md:"flex"
              }}}
            justifyContent={"center"}
            m={5}   >
            <Box
              component="img"
              src={detailProduct.images && detailProduct.images[0]?.url || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'}
              />
            
          </Box>
          <Box width={"60%"}
           height={450} 
           display={"flex"}
           flexDirection={"column"}
           alignItems={"flex-start"}
>
              <Typography variant="h6" component="p" >
                {`categoria > ${detailProduct.name && detailProduct.category.name}`}
              </Typography>
              <Typography variant="h4" component="p" marginTop={15}>
                {detailProduct?.name}
              </Typography>
              <Typography variant="h6" component="p" marginTop={4}>
                {`${detailProduct?.description}`}
              </Typography>  
          </Box>
        </StyledBox>
      <Reviews id={i} />
    </>
  )
>>>>>>> Stashed changes
};